/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    loader: "akamai",
    path: "",
  }
};

module.exports = nextConfig;
