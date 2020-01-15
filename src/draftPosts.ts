import { graphql } from 'gatsby'
import { PostPreviewType } from '@components/PostPreview'

export const previewFragment = graphql`
  fragment PostPreview on MdxEdge {
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
`

export const postsPreviewQuery = graphql`
  {
    production: allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
      edges {
        ...PostPreview
      }
    }
    development: allMdx {
      edges {
        ...PostPreview
      }
    }
  }
`

export type PostPreviewEdge = {
  node: PostPreviewType
}

export const postsPreviews = (data: {
  production: { edges: PostPreviewEdge[] }
}) => {
  return data[process.env.NODE_ENV].edges
}
