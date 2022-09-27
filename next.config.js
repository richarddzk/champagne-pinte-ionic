const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', 'flagcdn.com', 'pinte.dev'],
  },
   env: {
    MIDGARD_ENV: process.env.MIDGARD_ENV,
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    DEV_API_URL: process.env.DEV_API_URL,
    PROD_API_URL: process.env.PROD_API_URL,
    REACT_APP_GOOGLE_AUTH_CLIENT_ID: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
    REACT_APP_GOOGLE_AUTH_CLIENT_SECRET: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_SECRET,
    REACT_APP_FACEBOOK_AUTH_CLIENT_ID: process.env.REACT_APP_FACEBOOK_AUTH_CLIENT_ID,
    ENCRYPT_SALT: process.env.ENCRYPT_SALT,
  },
  swcMinify: true,
 
}
module.exports = withBundleAnalyzer(module.exports)
