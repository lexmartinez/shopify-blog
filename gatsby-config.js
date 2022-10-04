require('dotenv').config({ path: '.env' })

module.exports = {
  siteMetadata: {
    title: 'Guía Shopy',
    description:
      'Somos un blog especializado en Shopify, te ofrecemos un gran conjunto de artículos, tips y tutoriales en español que te ayudaran a construir & llevar tu tienda online a otro nivel',
    url: 'https://www.guiashopy.com',
    siteUrl: 'https://www.guiashopy.com',
    image: '/favicon.svg',
    twitterUsername: '@guiashopy',
    shortDescription: 'Blog en español especializado en Shopify',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-styled-components-dark-mode',
      options: {
        light: require('./src/theme/index.js').lightTheme,
        //dark: require('./src/theme/index.js').darkTheme,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts-with-attributes',
      options: {
        fonts: [
          'merriweather:100,300,400,700,400',
          'roboto:100,300,400,700',
          'roboto mono:100,300,400,700',
        ],
        display: 'swap',
        attributes: {
          rel: 'stylesheet preload prefetch',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: '#017556',
        height: '4px',
        paths: ['/articles/**'],
      },
    },
    {
      resolve: 'gatsby-source-notion-api',
      options: {
        token: process.env.NOTION_API_KEY,
        databaseId: process.env.NOTION_DATABASE,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Guía Shopy',
        short_name: 'Guía Shopy',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#017556',
        display: 'standalone',
        icon: 'static/favicon.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'GA-TRACKING_ID', // Google Analytics / GA
          'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
          origin: 'YOUR_SELF_HOSTED_ORIGIN',
        },
      },
    },
  ],
}
