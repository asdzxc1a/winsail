import withMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https://cdn.example.com https://scontent.cdninstagram.com; font-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {},
})(nextConfig);
