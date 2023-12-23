/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/organizations/:id',
        destination: '/organizations/:id/info',
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig
