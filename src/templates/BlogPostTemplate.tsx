import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Helmet from 'react-helmet'
import Layout from '@components/Layout'
import styled from 'styled-components'

const Header = styled.header`
  margin-bottom: 32px;
  margin-top: 32px;
`

const Heading = styled.h1`
  margin-bottom: 8px;
`

const BlogTemplate = ({ data }) => {
  const { mdx } = data
  return (
    <Layout>
      <Helmet title={mdx.frontmatter.title} />
      <Header>
        <Heading>{mdx.frontmatter.title}</Heading>
        <span>{mdx.timeToRead} minutes</span>
      </Header>

      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MDXBlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      body
      frontmatter {
        title
        path
      }
    }
  }
`

export default BlogTemplate
