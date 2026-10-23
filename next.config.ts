import type { NextConfig } from "next";

// Genera el sitio como archivos estáticos en la carpeta `out/` (para Cloudflare).
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
