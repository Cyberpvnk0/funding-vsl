/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/credit-repair',
        destination: 'https://credit-repair-vsl-72.vercel.app/',
      },
      {
        source: '/credit-repair/:path*',
        destination: 'https://credit-repair-vsl-72.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig
