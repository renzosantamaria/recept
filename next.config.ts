import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://img.koket.se/**')],
  },
};

export default nextConfig;
