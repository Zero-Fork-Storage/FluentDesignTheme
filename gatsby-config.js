require('ts-node').register();

module.exports = {
  siteMetadata: {
    title: `Fluent Design Gatsby Theme`,
    description: `Microsoft Fluent Design을 적용한 Gatsby Theme`,
    author: `@zeroday0619`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
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
        name: `fluent-design-default`,
        short_name: `fluent-design`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fluent-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
