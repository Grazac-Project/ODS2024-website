/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.handlebars/,
            use: {
                loader: 'handlebars-loader',
            },
        });
        return config;
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
