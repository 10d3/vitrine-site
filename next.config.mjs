/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '**',
            }
        ],
    },
};

export default nextConfig;
