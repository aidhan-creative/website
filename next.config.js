/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**aidhan.au",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        pathname: "/Dxsm1yoM7Ap4me0rmkAg9w/**",
      },
    ],
  },
};

module.exports = nextConfig;
