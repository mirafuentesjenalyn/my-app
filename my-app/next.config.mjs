/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DB_NAME: process.env.DB_NAME,
      DB_USER: process.env.DB_USER,
      DB_PASS: process.env.DB_PASS,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_DIALECT: process.env.DB_DIALECT,
    },
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        path: false,
        net: false,
        tls: false,
        dns: false,
      };
      return config;
    },
  };
  
  export default nextConfig;
  