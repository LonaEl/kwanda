/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: '/twitter.com/Agric_young/',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
