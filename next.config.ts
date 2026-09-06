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
      // /be-a-clipper was renamed to /clippers in the brand-black rebuild.
      {
        source: "/be-a-clipper",
        destination: "/clippers",
        permanent: true,
      },
      {
        source: "/be-a-clipper/thanks",
        destination: "/clippers/thanks",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
