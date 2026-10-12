# Voltio EL AB

Webbplatsen för [Voltio EL AB](https://voltioel.se), elektriker i Södertälje och Stockholm.

## Teknik

| Del | Teknik |
|---|---|
| Frontend | React 18, React Router 7, Vite 8 |
| Formulär | React Hook Form och Zod, notiser med Sonner |
| Kontaktformulär | ASP.NET Core 10 (minimal API) med MailKit |
| E-post | SMTP via one.com |
| Drift | Caddy och systemd i en Linux-container på Proxmox |
| Deploy | GitHub Actions: bygger på GitHub, driftsätter via en self-hosted runner |

## Struktur

```
src/        React-appen: sidor och komponenter
public/     Statiska filer: bilder, favicon, robots.txt, sitemap.xml
form/       Tjänsten som tar emot kontaktformuläret och skickar e-post
deploy/     Caddyfile, systemd-enhet och anvisningar för servern
.github/    Workflow för bygge och deploy
```

## Kom igång

Kräver Node 24 (se `.nvmrc`).

```bash
npm install       # installera beroenden
npm run dev       # starta dev-servern
npm run build     # bygg för produktion (till dist/)
npm run preview   # förhandsgranska produktionsbygget
```

Formulärtjänsten kräver .NET 10 SDK:

```bash
dotnet build form
```

## Driftsättning

Deploy startas manuellt i GitHub Actions (**Build & Deploy (Proxmox)**). Workflowen bygger
webbplatsen och formulärtjänsten på GitHub och kopierar dem sedan till servern.
SMTP-lösenordet finns bara på servern, aldrig i repot eller på GitHub.
Se [`deploy/README.md`](deploy/README.md).

## Kontakt

- Telefon: 073-913 36 13
- E-post: [info@voltioel.se](mailto:info@voltioel.se)
- Org.nr: 559577-1006

## Licens

Källkoden © 2026 Eliya Amanoeel. Alla rättigheter förbehållna. Koden är publik som referens.

Logotyp, texter och bilder tillhör Voltio EL AB och får inte användas utan tillstånd.
