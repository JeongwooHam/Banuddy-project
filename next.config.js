/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_LIST_KEY}/json/TbAdpWaitAnimalView/`,
        destination: `http://openapi.seoul.go.kr:8088`,
      },
    ]
  },
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
