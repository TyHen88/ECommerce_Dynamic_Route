import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ✅ Remove deprecated eslint config — use CLI flags instead
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'localhost',
      // Google OAuth profile images
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      // GitHub OAuth profile images (for future use)
      'avatars.githubusercontent.com',
      // Microsoft OAuth profile images (for future use)
      'graph.microsoft.com',
      // Product images
      'images.unsplash.com',
      'www.qoltec.com',
      'dragonimage.com.au',
    ],
  },
}

export default nextConfig
