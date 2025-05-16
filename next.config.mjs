/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com', 'images.unsplash.com' , 'img.lazcdn.com'],
  },
};

export default nextConfig;
