/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
