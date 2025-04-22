/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.bing.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "th.bing.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.simpolo.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.simpolo.net",
                port: "",
            },
            {
                protocol: "https",
                hostname: "tailwindcss.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "kajariatiles.com.au",
                port: "",
            },
            {
                protocol: "https",
                hostname: "cdn.mos.cms.futurecdn.net",
                port: "",
            },
            {
                protocol: "https",
                hostname: "milesoftiles.co.uk",
                port: "",
            },
        ],
    },
};

export default nextConfig;
