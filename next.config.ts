import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:"standalone",
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "l2yvnapk4q.ufs.sh",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
