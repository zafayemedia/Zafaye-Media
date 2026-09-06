import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /portfolio was renamed to /work in the brand-black rebuild.
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
