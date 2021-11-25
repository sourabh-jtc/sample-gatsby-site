/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
  ],
  siteMetadata:{
    title:"The Worth sayings",
    description:"Content creation on Youtube Social media handle",
    copyright:"This channel is copyright 2021 The Worth Sayings"
  }
}
