<%@ WebHandler Language="C#" Class="Send" %>

using System;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;

public class Send : IHttpHandler
{
    public void ProcessRequest(HttpContext ctx)
    {
        // Only accept POST requests
        if (ctx.Request.HttpMethod != "POST")
        {
            ctx.Response.Redirect("kontakt.html");
            return;
        }

        // Read and sanitize form fields
        string firstName = Sanitize(ctx.Request.Form["firstName"]);
        string lastName  = Sanitize(ctx.Request.Form["lastName"]);
        string email     = Sanitize(ctx.Request.Form["email"]);
        string phone     = Sanitize(ctx.Request.Form["phone"]);
        string message   = Sanitize(ctx.Request.Form["message"]);

        // Validate required fields
        if (string.IsNullOrWhiteSpace(firstName) ||
            string.IsNullOrWhiteSpace(lastName)  ||
            string.IsNullOrWhiteSpace(email)     ||
            string.IsNullOrWhiteSpace(message)   ||
            !IsValidEmail(email))
        {
            ctx.Response.Redirect("kontakt.html?error=validation");
            return;
        }

        // Phone is optional — validate format only if provided
        if (!string.IsNullOrWhiteSpace(phone) && !IsValidPhone(phone))
        {
            ctx.Response.Redirect("kontakt.html?error=validation");
            return;
        }

        try
        {
            string subject = string.Format(
                "Ny kontakt från {0} {1} via voltioel.se",
                firstName, lastName
            );

            string body = string.Format(
                "Namn:     {0} {1}\r\n" +
                "E-post:   {2}\r\n" +
                "Telefon:  {3}\r\n" +
                "\r\nMeddelande:\r\n{4}",
                firstName, lastName, email,
                string.IsNullOrWhiteSpace(phone) ? "—" : phone,
                message
            );

            using (var msg = new MailMessage())
            {
                // From must match the authenticated SMTP account
                msg.From    = new MailAddress("info@voltioel.se", "Voltio EL AB");
                msg.ReplyToList.Add(new MailAddress(email, firstName + " " + lastName));
                msg.To.Add("info@voltioel.se");
                msg.Subject    = subject;
                msg.Body       = body;
                msg.IsBodyHtml = false;

                using (var smtp = new SmtpClient())
                {
                    // SMTP settings are read from web.config <system.net><mailSettings>
                    smtp.Send(msg);
                }
            }

            ctx.Response.Redirect("kontakt.html?sent=1");
        }
        catch
        {
            ctx.Response.Redirect("kontakt.html?error=smtp");
        }
    }

    private static string Sanitize(string input)
    {
        if (input == null) return string.Empty;
        // Strip newlines to prevent SMTP header injection
        string trimmed = input.Trim().Replace("\r", "").Replace("\n", "");
        return trimmed.Length > 2000 ? trimmed.Substring(0, 2000) : trimmed;
    }

    private static bool IsValidEmail(string email)
    {
        return Regex.IsMatch(email,
            @"^[^@\s]+@[^@\s]+\.[^@\s]+$",
            RegexOptions.IgnoreCase);
    }

    private static bool IsValidPhone(string phone)
    {
        // Strip common formatting chars, then require 7-15 digits
        string digits = Regex.Replace(phone, @"[\s\-().+]", "");
        return Regex.IsMatch(digits, @"^\d{7,15}$");
    }

    public bool IsReusable { get { return false; } }
}
