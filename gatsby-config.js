module.exports = {
  flags: {
    FAST_REFRESH: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: `Bruno Chirelli Portfólio`,
    description: `Portfólio de Bruno Chirelli.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-styled-components`,
    // https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
