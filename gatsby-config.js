const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'My little weblog',
        short_name: 'My little weblog',
        start_url: '/',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        // icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': path.resolve(__dirname, 'src/components'),
          '@themes': path.resolve(__dirname, 'src/themes'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/src/posts`,
        name: 'markdown-pages',
      },
    },
    'gatsby-mdx',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}
