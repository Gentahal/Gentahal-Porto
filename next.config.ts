import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'example.com', // Domain contoh dari error Anda
      'images.unsplash.com',
      'i.imgur.com',
      'localhost',
      // Tambahkan semua domain yang digunakan untuk gambar
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Mengizinkan semua hostname HTTPS
      },
    ],
  },
};

export default nextConfig;
