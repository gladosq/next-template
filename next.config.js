/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    devIndicators: {
        buildActivityPosition: 'bottom-left',
    },
    reactStrictMode: true,
    swcMinify: true
}

module.exports = nextConfig
