import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/workshop/*.png", search: "?v=2026-10-16" },
    ],
  },
};

export default nextConfig;
