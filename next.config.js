/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  devIndicators: {
        buildActivity: false,
    },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
