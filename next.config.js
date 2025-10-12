/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true 
  },
  eslint: {
    // Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig