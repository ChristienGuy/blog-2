import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import styled from 'styled-components'

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PostListItem = styled.li`
  margin-bottom: 24px;
`

const IndexPage = ({ data }) => {
  const { allMdx } = data
  const Posts = (
    <PostList>
      {allMdx.edges
        .sort((a, b) => {
          const dateA = new Date(a.node.frontmatter.date)
          const dateB = new Date(b.node.frontmatter.date)
          return dateB - dateA
        })
        .map(edge => (
          <PostListItem key={edge.node.id}>
            <PostPreview post={edge.node} />
          </PostListItem>
        ))}
    </PostList>
  )

  return (
    <Layout>
      {Posts}
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            path
            excerpt
            date
          }
        }
      }
    }
  }
`

export default IndexPage
