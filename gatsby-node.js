/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)
  createPage({
    ...page,
    // context: {
    //   loadDraft: process.env.NODE_ENV === 'development',
    // },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.tsx`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx${
              process.env.NODE_ENV === 'production'
                ? '(filter: { frontmatter: { draft: { ne: true } } })'
                : ''
            }
               {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: BlogPostTemplate,
            context: { id: node.id },
          })
        })
      })
    )
  })
}
