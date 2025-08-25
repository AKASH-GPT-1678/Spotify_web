import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {

    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co", // Allow images from Spotify CDN
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "pickasso.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "seed-mix-image.spotifycdn.com"
      },
      {
        protocol: "https",
        hostname: "charts-images.scdn.co"
      }

    ],
  },
};

export default nextConfig;
