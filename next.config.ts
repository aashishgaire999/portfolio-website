import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "codyza.com" },
      { protocol: "https", hostname: "kalikacleaning.com" },
      { protocol: "https", hostname: "**.vercel.app" },
      { protocol: "https", hostname: "s0.wp.com" },
    ],
  },
};

export default nextConfig;
