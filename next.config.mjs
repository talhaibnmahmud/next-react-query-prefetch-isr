/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "raw.githubusercontent.com",
                protocol: "https",
            },
        ],
    },
    logging: { fetches: { fullUrl: true } },
};

export default nextConfig;
