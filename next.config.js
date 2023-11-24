/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
