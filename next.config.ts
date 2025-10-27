import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ✅ Remove deprecated eslint config — use CLI flags instead
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // ✅ Replace deprecated `domains` with `remotePatterns`
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg', // or the real image host
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
