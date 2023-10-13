/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'animal.seoul.go.kr',
        port: '',
        pathname: '/comm/getImage/**',
      },
    ],
  },
}

module.exports = nextConfig
