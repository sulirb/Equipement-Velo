/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "equipement-velo-api.onrender.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
