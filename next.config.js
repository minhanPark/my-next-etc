// 여기서 logging을 설정하니 cache에 대한 것이 뜬다!
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    logging: "verbose",
  },
};

module.exports = nextConfig;
