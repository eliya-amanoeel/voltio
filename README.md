# Voltio EL AB

The website for [Voltio EL AB](https://voltioel.se), electricians in Södertälje and Stockholm.

## Stack

| Part | Technology |
|---|---|
| Frontend | React 18, React Router 7, Vite 8 |
| Forms | React Hook Form and Zod, notifications with Sonner |
| Contact form | ASP.NET Core 10 (minimal API) with MailKit |
| Email | SMTP via one.com |
| Hosting | Caddy and systemd in a Linux container on Proxmox |
| Deploy | GitHub Actions: builds on GitHub, deploys through a self-hosted runner |

## Structure

```
src/        The React app: pages and components
public/     Static files: images, favicon, robots.txt, sitemap.xml
form/       The service that receives the contact form and sends the email
deploy/     Caddyfile, systemd unit and server setup notes
.github/    Build and deploy workflow
```

## Getting started

Requires Node 24 (see `.nvmrc`).

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build     # build for production (to dist/)
npm run preview   # preview the production build
```

The form service needs the .NET 10 SDK:

```bash
dotnet build form
```

## Deployment

Deploys are started by hand in GitHub Actions (**Build & Deploy (Proxmox)**). The workflow
builds the site and the form service on GitHub, then copies them to the server.
The SMTP password lives only on the server, never in the repo or on GitHub.
See [`deploy/README.md`](deploy/README.md).

## Contact

- Phone: 073-913 36 13
- Email: [info@voltioel.se](mailto:info@voltioel.se)
- Company reg. no.: 559577-1006

## License

The source code is licensed under [MIT](LICENSE), © 2026 Eliya Amanoeel.

The license does not cover Voltio EL AB's logo, texts and images (including those in `public/`).
They belong to Voltio EL AB and may not be used without permission.
