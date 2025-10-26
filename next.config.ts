import type { NextConfig } from "next";
import 'dotenv/config';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.API_IMAGE_URL}`,
        port: '',
        pathname: '/i/**',
      },
    ],
    qualities: [1, 25, 50, 75, 80, 100],

  },
};

export default nextConfig;
