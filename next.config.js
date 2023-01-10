/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
