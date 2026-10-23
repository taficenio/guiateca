# Guiateca — contexto para Claude Code

## Qué es
Biblioteca online de guías en PDF y plantillas curadas (PDF, Sheets, Docs, Canva) para Argentina y
LATAM. Categorías: Trámites y emigrar, Finanzas personales, Docentes, Trabajo y CV, IA práctica.
Todo el contenido del sitio va en español rioplatense.

## Modelo de negocio
- Guía suelta: USD 2–3.
- Pack de 10 créditos: USD 8 (1 crédito = 1 guía, sin vencimiento).
- Suscripción "Biblioteca completa": USD 6/mes, acceso ilimitado.
- Captación: guía gratis a cambio del email.

## Decisiones técnicas
- Next.js 15 (App Router) + TypeScript. Sin librerías de UI.
- CSS plano en `app/globals.css`, con colores y medidas en variables de `:root`.
- Fuentes con `next/font`: Space Grotesk (títulos) e Inter (texto).
- Catálogo de ejemplo en `data/guias.ts` (11 guías). Pasa a la base de datos en el paso 2.
- Componentes: `components/Catalogo.tsx` (buscador y filtros), `components/VistaPrevia.tsx`
  (panel lateral) y `components/FormEmail.tsx` (todavía no envía nada).
- Deploy: Cloudflare Workers, conectado al repo `taficenio/guiateca` en GitHub.
  `next.config.ts` usa `output: "export"`, que genera el sitio estático en `out/`, y
  `wrangler.jsonc` sirve esa carpeta. En Cloudflare el build command es `npm run build`.
  Cuando haga falta servidor (login, pagos, webhooks, URLs firmadas) hay que migrar al adaptador
  `@opennextjs/cloudflare` y sacar `output: "export"`.

## Diseño
- Fondo blanco, texto `#1B1F1D`, gris `#4A504D`, bordes `#E4E4E0`, acento azul `#2346D1`.
- Bordes redondeados de 8–12 px.
- Responsive: en celular todo se apila.
- Accesible: botones reales, labels en inputs, contraste suficiente, áreas táctiles de 44 px o más.

## Reglas
- Nunca publicar los PDF en rutas públicas.
- Secretos solo en `.env.local`; mantener `.env.example` actualizado.
- Usar los modos de prueba (sandbox) de los proveedores de pago; nunca claves reales.
- No agregar librerías sin explicar antes por qué.

## Forma de trabajo
- Antes de cada paso: contar en pocas líneas qué se va a hacer y qué archivos se crean o tocan.
- Después de cada paso: correr `npm run build`, corregir errores, explicar cómo probarlo,
  hacer un commit y marcar el paso como terminado acá.
- Si hace falta una decisión del dueño (proveedor, cuentas, claves), frenar y preguntar.
- Al final de cada paso, proponer el siguiente y esperar el OK.

## Hoja de ruta
- [x] 0. Proyecto Next.js + home (header, hero, catálogo con buscador, filtros y vista previa,
      beneficios, planes, banda de guía gratis, footer).
- [ ] 1. Página por guía en `/guias/[slug]` con vista previa y metadatos para SEO.
- [ ] 2. Base de datos (Supabase o Postgres + Prisma): guías, usuarios, compras, créditos, suscripciones.
- [ ] 3. Login con link mágico por email o Google.
- [ ] 4. Pagos: Mercado Pago (ARS) y Stripe (USD), con webhooks que registren el acceso.
- [ ] 5. PDFs en almacenamiento privado; descarga solo con URL firmada si el usuario tiene acceso.
- [ ] 6. Panel "Mi biblioteca" con lo comprado.
- [ ] 7. Formulario de email conectado a una herramienta de email marketing.
- [ ] 8. Panel de administración para cargar guías.
