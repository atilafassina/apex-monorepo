/**
 * @type {import('next').NextConfig}
 */
export default {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui"],
  },
};
