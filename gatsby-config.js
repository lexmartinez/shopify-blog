require('dotenv').config({ path: '.env' })

module.exports = {
  siteMetadata: {
    title: 'Guía Shopify',
    description:
      'Guía Shopify es un blog especializado en Shopify, donde encontrarás tips y tutoriales que te ayudaran a llevar tu tienda online a otro nivel',
    url: 'https://www.guiashopify.co',
    siteUrl: 'https://www.guiashopify.co',
    image: '/favicon.png',
    twitterUsername: '@lex0316',
    shortDescription: 'Blog especializado en Shopify con infinidad de tips y tutoriales',
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
        name: 'Guia Shopify',
        short_name: 'Guia Shopify',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#017556',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
