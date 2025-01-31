import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import dotenv from "dotenv";

dotenv.config();
console.log("MAINTENANCE_MODE:", process.env.MAINTENANCE_MODE);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "equipement-velo.fr",
      },
    ],
  },
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  async redirects() {
    // Vérifiez si le mode maintenance est activé
    if (process.env.MAINTENANCE_MODE == "true") {
      return [
        {
          source: "/((?!maintenance).*)",
          destination: "/maintenance",
          permanent: false,
        },
      ];
    }

    // Retournez un tableau vide si le mode maintenance n'est pas activé
    return [];
  },
};

if (process.env.NODE_ENV === "development") {
  setupDevPlatform();
}

export default nextConfig;
