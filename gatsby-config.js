module.exports = {
  siteMetadata: {
    title: 'Flex website',
    author: 'Zed78',
    description: 'Dezsőék honlapja',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: ['/wp/v2/users/**', '/wp/v2/settings*', '/wp/v2/themes'],
        baseUrl: 'zsigmond.000webhostapp.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://zsigmond.000webhostapp.com',
          replacementUrl: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Source Sans Pro',
            variants: ['300', '400', '500', '600', '700'],
          },
        ],
      },
    },
  ],
}
