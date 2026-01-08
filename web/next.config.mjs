/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // SEO/canonical: keep apex domain as the single source of truth
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.knh.nz' }],
        destination: 'https://knh.nz/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
