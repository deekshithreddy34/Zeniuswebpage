import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // static export
  eslint: {
    ignoreDuringBuilds: true, // <--- add this
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
