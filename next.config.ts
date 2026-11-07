import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export', // <=== Enables static exports
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
