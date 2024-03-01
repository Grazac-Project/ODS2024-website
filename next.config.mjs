/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
       missingSuspenseWithCSRBailout: false,
    },
    images: {
        remotePatterns: [
            { hostname: 'drive.google.com' },
            { hostname: 'res.cloudinary.com', },
            { hostname: "ui-avatars.com" },
        ]
    },
};

export default nextConfig;
