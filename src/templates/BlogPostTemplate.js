import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Helmet from 'react-helmet'
import Layout from '@components/Layout'

const BlogTemplate = ({ data }) => {
  const { mdx } = data
  return (
    <Layout>
      <Helmet title={mdx.frontmatter.title} />

      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
      }
      code {
        body
      }
    }
  }
`

export default BlogTemplate
