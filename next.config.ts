import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dqy38fnwh4fqs.cloudfront.net",
      },
    ],
    domains: ["api.microlink.io"],
  },
};

export default nextConfig;
