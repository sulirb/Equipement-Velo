/** @type {import('next').NextConfig} */
const nextConfig = {
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
