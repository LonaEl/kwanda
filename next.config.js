/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/pay',
        destination: '/payment',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
