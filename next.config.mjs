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
};

export default nextConfig;
