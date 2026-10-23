# Guiateca

Biblioteca online de guías y plantillas curadas para Argentina y LATAM.

## Requisitos
- Node.js 20 o superior (https://nodejs.org).

## Cómo levantarlo en tu compu
1. Abrí esta carpeta en una terminal.
2. Instalá las dependencias: `npm install`
3. Copiá `.env.example` como `.env.local` (por ahora no hace falta completar nada).
4. Levantá el sitio en modo desarrollo: `npm run dev`
5. Abrí http://localhost:3000

## Generar la versión publicable
`npm run build` genera el sitio estático en la carpeta `out/`.

## Publicar en Cloudflare
El Worker está conectado a este repo de GitHub. Cada push a `main` dispara un deploy.
En la configuración del Worker (Settings → Build):
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

`wrangler.jsonc` le indica a Cloudflare que sirva la carpeta `out/`.

## Seguir con Claude Code
`CLAUDE.md` tiene el contexto del negocio, las reglas y la hoja de ruta.
Por ejemplo, pedile: "Seguí con el próximo paso de la hoja de ruta".
