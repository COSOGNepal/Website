/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false, // the solution

        };
        return config;
    },
    experimental: {
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"]
    }
};

module.exports = nextConfig;
