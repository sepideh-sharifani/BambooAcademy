const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['api.localhost'],
  }
}
module.exports = withPlugins([withFonts], nextConfig,);