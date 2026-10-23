# Guiateca — contexto para Claude Code

## Qué es
Biblioteca online de guías en PDF y plantillas curadas (trámites, finanzas personales, docentes,
trabajo y CV, IA práctica). Público: Argentina y LATAM. Todo el sitio está en español rioplatense.

## Modelo de negocio
- Compra individual: USD 2–3 por guía.
- Pack de 10 créditos: USD 8 (1 crédito = 1 guía, sin vencimiento).
- Suscripción "Biblioteca completa": USD 6/mes, acceso ilimitado.
- Captación: guía gratis a cambio del email.

## Estado actual
- Next.js (App Router) + TypeScript, CSS plano en `app/globals.css`.
- Catálogo de ejemplo en `data/guias.ts` (datos estáticos).
- `components/Catalogo.tsx`: buscador, filtros por categoría y vista previa.
- Botones de compra, suscripción y formulario de email todavía NO funcionan.

## Hoja de ruta (en este orden)
1. Página individual por guía en `/guias/[slug]` con vista previa (para SEO).
2. Base de datos (sugerido: Supabase o Postgres + Prisma) para guías, usuarios, compras, créditos y suscripciones.
3. Autenticación (email con link mágico o Google).
4. Pagos: Mercado Pago (ARS) y Stripe (USD). Webhooks que registren compras y suscripciones.
5. Entrega segura de archivos: PDFs en almacenamiento privado, descarga con URL firmada solo si el usuario tiene acceso.
6. Panel "Mi biblioteca" con lo comprado.
7. Formulario de email conectado a una herramienta de email marketing.
8. Panel de administración para subir guías.
9. (Más adelante) Creadores invitados con reparto de ingresos.

## Reglas
- Nunca exponer los PDF en rutas públicas.
- Claves y secretos solo en `.env.local` (nunca en el repo).
- Mantener el diseño actual (colores en variables CSS de `globals.css`).
- Accesible: botones reales, labels en inputs, contraste suficiente.
