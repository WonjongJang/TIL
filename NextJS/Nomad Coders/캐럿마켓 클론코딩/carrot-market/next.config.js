/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // false로 하면 중복 출력 X
  experimental: {
    reactRoot: true,
    runtime: "nodejs",
    serverComponents: true,
  },
  images: {
    domains: ["imagedelivery.net", "videodelivery.net"],
  },
};

module.exports = nextConfig;
