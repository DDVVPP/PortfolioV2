/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/projects/dev-today',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
