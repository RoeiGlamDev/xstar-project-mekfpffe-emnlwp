import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domain here
  },
  i18n: {
    locales: ['en-US', 'fr'], // Add your desired locales
    defaultLocale: 'en-US',
  },
  webpack: (config) => {
    // Custom webpack configuration if needed
    return config;
  },
};

export default nextConfig;