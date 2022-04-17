const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['https://lh3.googleusercontent.com'],
  },
});