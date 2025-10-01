import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output:"standalone",
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "l2yvnapk4q.ufs.sh",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
