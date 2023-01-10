/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio"
};

module.exports = nextConfig;
