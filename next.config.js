/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    unoptimized: true 
  },
  eslint: {
    // Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig