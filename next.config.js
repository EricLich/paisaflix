/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**',
      }
    ]
  },
  modularizeImports: {
    /* "@fortawesome/free-solid-svg-icons": {
      transform: "@fortawesome/free-solid-svg-icons/{{member}}"
    }, */
    "@next/font": {
      transform: "@next/font/{{member}}"
    }
  }
}

module.exports = nextConfig
