/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                  code {
                    scope
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
