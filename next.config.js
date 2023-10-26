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
      {
        protocol: 'http',
        hostname: 'www.animal.go.kr',
        port: '',
        pathname: '/files/shelter/**',
      },
    ],
  },
}

module.exports = nextConfig
