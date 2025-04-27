import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // Disable cache in development to avoid serialization issues
    if (dev) {
      config.cache = false;
    }
    return config;
  },  // Added comma here
  
  reactStrictMode: true,
  // Enable verbose logging for development to help debug middleware
  
  // Make sure there are no settings disabling middleware
  experimental: {
    // Any experimental features you want to enable
   
    // Note: In Next.js 15, middleware should be fully supported without experimental flags
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Add environment variables that should be available at build time if needed
  env: {
    // Non-sensitive variables only
  },
  compiler: {
    styledComponents: true,
  },
  postcss: true,  // Enable PostCSS processing
};

export default nextConfig;