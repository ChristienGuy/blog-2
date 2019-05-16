import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import PostPreview from '@components/PostPreview'
import styled from 'styled-components'
import { postsPreviews, PostPreviewEdge } from '@src/draftPosts'

const PostList = styled.ul`
  list-style: none;
  padding: 12px 0;
  margin: 0;
`

const PostListItem = styled.li`
  margin-bottom: 0;
`

const LatestPosts: React.FC<{ posts: PostPreviewEdge[] }> = ({ posts }) => (
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
    production: {
      edges: PostPreviewEdge[]
    }
    development: {
      edges: PostPreviewEdge[]
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const posts = postsPreviews(data)

  return <Layout>{posts ? <LatestPosts posts={posts} /> : 'No posts'}</Layout>
}

// TODO: update this to load all content not just draft: true or draft: false
export const pageQuery = graphql`
  {
    production: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        ...PostPreview
      }
    }
    development: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        ...PostPreview
      }
    }
  }
`

export default IndexPage
