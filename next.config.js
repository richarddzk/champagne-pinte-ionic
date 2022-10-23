const optimizedImages = require('next-optimized-images')
const withPlugins = require('next-compose-plugins')
// SSR Next config for Production
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false,
      },
    ],
  ],

  {
    trailingSlash: true,
    images: {
      disableStaticImages: true,
      loader: "custom",
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
      GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    },
    swcMinify: true,
    exportPathMap: async function (
    ) {
      return {
        '/': { page: '/' },
        '/lamaison': { page: '/lamaison', query: { title: 'Notre Maison' } },
        '/accueil': { page: '/accueil', query: { title: 'Accueil' } },
        '/404': { page: '/404', query: { title: '404' } },
        '/compte/[id]': { page: '/compte/[id]', query: { title: 'Mon compte' } },
        '/actualites': { page: '/actualites', query: { title: 'Notre Actualités' } },
        '/notresavoirfaire': { page: '/notresavoirfaire', query: { title: 'Notre Savoir Faire' } },
        '/champagnes': { page: '/champagnes', query: { title: 'Nos Champagnes' } },
        '/changePassword': { page: '/changePassword', query: { title: 'Change your password' } },
        '/charte': { page: '/charte', query: { title: 'Charte de confidentialité' } },
        '/paiement': { page: '/paiement', query: { title: 'Paiement' } },
        '/conditions': { page: '/conditions', query: { title: 'Conditions générales' } },
        '/confirmEmail': { page: '/confirmEmail', query: { title: 'Confirmation Email' } },
        '/connexion': { page: '/connexion', query: { title: 'Connexion' } },
        '/newsletter': { page: '/newsletter', query: { title: 'Newsletter' } },
        '/panier': { page: '/panier', query: { title: 'Panier' } },
        '/produit/[id]': { page: '/produit/[id]', query: { title: 'Page Produit' } },
        '/nousContacter': { page: '/nousContacter', query: { title: 'Nous contacter' } },

      }
    }
  }
)