/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-v2-art.s3.us-west-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
