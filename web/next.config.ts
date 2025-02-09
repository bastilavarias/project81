import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',  // Allow both http and https if needed
                hostname: '**',     // Wildcard to match all domains
            },
        ],
    },
};

export default nextConfig;
