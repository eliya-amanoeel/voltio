# Voltio EL AB

Webbplats för Voltio EL AB — elektriker i Södertälje & Stockholm.

## Om företaget

Voltio EL AB drivs av två bröder med över 15 års erfarenhet inom elbranschen, verksamma i Södertälje och Stockholm.

## Kontakt

- Telefon: 073-913 36 13
- E-post: [info@voltioel.se](mailto:info@voltioel.se)
- Org.nr: 559577-1006

## Teknikstack

- **Frontend**: React 18 + Vite 5 + React Router v6
- **Formulärvalidering**: React Hook Form + Zod
- **Notifieringar**: Sonner
- **Backend**: ASP.NET `.ashx` handler (IIS, Windows Server)
- **E-post**: SMTP via one.com (`send.one.com:587`)
- **Deploy**: GitHub Actions (self-hosted runner)

## Kommandon

\`\`\`bash
npm install       # Installera beroenden
npm run dev       # Starta dev-server
npm run build     # Bygg för produktion (output: dist/)
npm run preview   # Förhandsgranska produktionsbygget
\`\`\`

## Deploy

Deploy sker manuellt via GitHub Actions (\`workflow_dispatch\`). SMTP-lösenordet läses från GitHub-secret \`SMTP_PASSWORD\` och skrivs till \`web.config\` vid deploy.
