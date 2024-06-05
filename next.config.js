// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
    domains: ["assets.aceternity.com"],
  },
};
