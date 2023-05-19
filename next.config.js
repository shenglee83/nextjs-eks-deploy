/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    FE_VARIABLE: process.env.FE_VARIABLE,
  },
}

module.exports = nextConfig
