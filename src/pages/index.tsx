import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import PostPreview, { Post } from '@components/PostPreview'
import styled from 'styled-components'

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PostListItem = styled.li`
  margin-bottom: 24px;
`

type MDXPage = {
  node: Post
}

const LatestPosts: React.FC<{ posts: MDXPage[] }> = ({ posts }) => (
  <PostList>
    {posts
      .sort((a, b) => {
        const dateA = new Date(a.node.frontmatter.date).getTime()
        const dateB = new Date(b.node.frontmatter.date).getTime()
        return dateB - dateA
      })
      .map(edge => (
        <PostListItem key={edge.node.id}>
          <PostPreview post={edge.node} />
        </PostListItem>
      ))}
  </PostList>
)

type Props = {
  data: {
    allMdx: {
      edges: MDXPage[]
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const { allMdx } = data

  return (
    <Layout>
      {allMdx ? <LatestPosts posts={allMdx.edges} /> : 'No posts'}
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
