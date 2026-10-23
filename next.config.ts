import type { NextConfig } from "next";

// Por ahora el sitio se exporta como archivos estáticos en `out/` (lo sirve Cloudflare).
// Cuando haya login, pagos y descargas privadas, pasamos a un adaptador con servidor.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
