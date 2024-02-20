/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'drive.google.com' },
            { hostname: 'res.cloudinary.com', },
        ]
    },
};

export default nextConfig;
