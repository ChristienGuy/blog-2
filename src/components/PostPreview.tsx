import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'

const StyledLink = styled(Link)`
  display: block;
  transition: ${ ({ theme }) => theme.themeTransition('color') },
    box-shadow 200ms ease-in-out;
  color: ${ ({ theme }) => theme.colors.primaryText };
  text-decoration: none;

  padding: 24px 0;
`

const Title = styled.h2`
  margin-bottom: 16px;
`

const Date = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${ ({ theme }) => theme.colors.fadedText };
  margin-bottom: 4px;
`

export type PostPreviewType = {
  id: string
  frontmatter: {
    title: string
    date: Date
    path: string
    excerpt: string
  }
}

type Props = {
  post: PostPreviewType
}
const PostPreview: React.FC<Props> = ({ post }) => (
  <StyledLink to={post.frontmatter.path}>
    <Date>{format(post.frontmatter.date, 'DD MMMM, YYYY')}</Date>
    <Title>{post.frontmatter.title}</Title>
    {post.frontmatter.excerpt ? <p>{post.frontmatter.excerpt}</p> : null}
  </StyledLink>
)

export default PostPreview
