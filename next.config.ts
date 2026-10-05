import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://www.bookiopro.com" },
        ],
      },
    ];
  },
};

export default nextConfig;
