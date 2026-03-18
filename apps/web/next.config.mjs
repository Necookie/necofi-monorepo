/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@necofi/api-client', '@necofi/theme', '@necofi/ui'],
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
