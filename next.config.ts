import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during the build
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during the build
  },
};

export default nextConfig;
