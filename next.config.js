/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  devIndicators: {
        buildActivity: false,
    },
}

module.exports = nextConfig
