/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for development
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable image optimization in development
  images: {
    unoptimized: true,
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
