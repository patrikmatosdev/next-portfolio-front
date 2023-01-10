/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/next-portfolio-front",
  assetPrefix: "/next-portfolio-front"
};

module.exports = nextConfig;
