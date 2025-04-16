/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.alfredorafael.com'], // Add the hostname here
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**' // Allows images from any domain
            }
        ]
    }
};
module.exports = nextConfig;
