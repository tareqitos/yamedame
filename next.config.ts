import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.API_URL_IMAGE}`,
        port: '',
        pathname: '/i/**',
      },
    ],
  },
};

export default nextConfig;
