require('dotenv').config({ path: '.env' })

module.exports = {
  siteMetadata: {
    title: 'The Redknot',
    description: 'A place to discover interesting stuff, one knot at time',
    url: 'https://www.redknot.io',
    image: '/favicon.png',
    twitterUsername: '@lex0316',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-styled-components-dark-mode',
      options: {
        light: require('./src/theme/index.js').lightTheme,
        dark: require('./src/theme/index.js').darkTheme,
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
        name: 'The Redknot',
        short_name: 'The Redknot',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#C53037',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
