/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'drive.google.com' },
        ]
    },
};

export default nextConfig;
