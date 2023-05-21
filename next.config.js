/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'photobank.maximum.expert',
                pathname: '/photo/**',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
