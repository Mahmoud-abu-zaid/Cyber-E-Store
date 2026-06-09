const nextConfig = {
  experimental: {
    browsersListForSwc: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zweodqtulvtcdwdnfjvy.supabase.co",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
