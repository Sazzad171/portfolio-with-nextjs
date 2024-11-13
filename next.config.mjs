/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "fstuploaddocument.s3.ap-southeast-1.amazonaws.com",
      // },
    ],
  },
  env: {
    SERVER: process.env.SERVER,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
