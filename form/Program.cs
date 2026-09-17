// Replacement for send.ashx: receives the contact form and mails it to info@voltioel.se.
// Runs behind the container's Caddy, which forwards /send.ashx here, so the frontend is unchanged.
// SMTP settings come from configuration (Smtp__Password via the systemd EnvironmentFile), never from the repo.

using System.Text;
using System.Text.RegularExpressions;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddOptions<SmtpOptions>()
    .Bind(builder.Configuration.GetSection("Smtp"))
    .Validate(o => !string.IsNullOrEmpty(o.Password), "Smtp:Password is not set")
    .ValidateOnStart();

var app = builder.Build();

app.MapPost("/send.ashx", async (HttpContext ctx, Microsoft.Extensions.Options.IOptions<SmtpOptions> smtpOptions, ILogger<Program> log) =>
{
    if (!ctx.Request.HasFormContentType)
        return Reply(ctx, false, validation: true);

    var form = await ctx.Request.ReadFormAsync();
    var firstName = Sanitize(form["firstName"]);
    var lastName  = Sanitize(form["lastName"]);
    var email     = Sanitize(form["email"]);
    var phone     = Sanitize(form["phone"]);
    var message   = Sanitize(form["message"]);

    if (string.IsNullOrWhiteSpace(firstName) ||
        string.IsNullOrWhiteSpace(lastName)  ||
        string.IsNullOrWhiteSpace(email)     ||
        string.IsNullOrWhiteSpace(message)   ||
        !IsValidEmail(email))
        return Reply(ctx, false, validation: true);

    // Phone is optional — validate format only if provided
    if (!string.IsNullOrWhiteSpace(phone) && !IsValidPhone(phone))
        return Reply(ctx, false, validation: true);

    var sent = false;
    try
    {
        var smtp = smtpOptions.Value;
        var msg = new MimeMessage();
        msg.From.Add(new MailboxAddress("Voltio EL AB", "info@voltioel.se"));
        msg.ReplyTo.Add(new MailboxAddress($"{firstName} {lastName}", email));
        msg.To.Add(new MailboxAddress("", "info@voltioel.se"));
        msg.Subject = $"Ny kontakt från {firstName} {lastName} via voltioel.se";
        var body = new TextPart("plain");
        body.SetText(Encoding.UTF8,
            $"Namn:     {firstName} {lastName}\r\n" +
            $"E-post:   {email}\r\n" +
            $"Telefon:  {(string.IsNullOrWhiteSpace(phone) ? "—" : phone)}\r\n" +
            $"\r\nMeddelande:\r\n{message}");
        msg.Body = body;

        using var client = new SmtpClient();
        client.Timeout = 15_000; // MailKit's default is 2 minutes; don't keep visitors waiting that long
        await client.ConnectAsync(smtp.Host, smtp.Port, SecureSocketOptions.StartTls);
        await client.AuthenticateAsync(smtp.User, smtp.Password);
        await client.SendAsync(msg);
        await client.DisconnectAsync(true);
        sent = true;
    }
    catch (Exception ex)
    {
        // Goes to the journal (journalctl -u voltio-form), not a file in the web root as under IIS.
        log.LogError(ex, "Sending contact mail failed");
    }

    return Reply(ctx, sent);
});

// Any other method → back to the contact page, like send.ashx did.
app.MapMethods("/send.ashx", ["GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"],
    () => Results.Redirect("/kontakt"));

app.Run();

static IResult Reply(HttpContext ctx, bool ok, bool validation = false)
{
    var wantsJson = ctx.Request.Headers.Accept.ToString().Contains("application/json");
    if (!wantsJson) return Results.Redirect("/kontakt");
    return Results.Text(
        ok ? "{\"ok\":true}" : validation ? "{\"ok\":false,\"error\":\"validation\"}" : "{\"ok\":false}",
        "application/json");
}

static string Sanitize(string? input)
{
    if (input == null) return string.Empty;
    // Strip newlines to prevent SMTP header injection
    var trimmed = input.Trim().Replace("\r", "").Replace("\n", "");
    return trimmed.Length > 2000 ? trimmed[..2000] : trimmed;
}

static bool IsValidEmail(string email) =>
    Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$", RegexOptions.IgnoreCase);

static bool IsValidPhone(string phone)
{
    // Strip common formatting chars, then require 7-15 digits
    var digits = Regex.Replace(phone, @"[\s\-().+]", "");
    return Regex.IsMatch(digits, @"^\d{7,15}$");
}

record SmtpOptions
{
    public string Host { get; init; } = "send.one.com";
    public int Port { get; init; } = 587;
    public string User { get; init; } = "info@voltioel.se";
    public string Password { get; init; } = "";
}
