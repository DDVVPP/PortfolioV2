/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
        basePath: '/about',
      },
    ];
  },
};

export default nextConfig;
