/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
        basePath: true,
      },
    ];
  },
};

export default nextConfig;
