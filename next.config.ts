import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com", protocol: "https" },
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "imgur.com", protocol: "https" },
      { hostname: "media2.dev.to", protocol: "https" },
    ],
  },
  async rewrites() {
    return [
      { source: "/pdf", destination: "/" },
      { source: "/mail", destination: "/" },
      { source: "/linkedin", destination: "/" },
      { source: "/test", destination: "/" },
    ];
  },
};

export default nextConfig;
