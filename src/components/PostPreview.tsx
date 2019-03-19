import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'

const StyledLink = styled(Link)`
  display: block;
  transition: ${({ theme }) => theme.themeTransition('color')};
  color: ${ ({ theme }) => theme.colors.primaryText };
  text-decoration: none;

  padding: 24px 0;
`

const Title = styled.h2`
  margin-bottom: 16px;
`

// TODO: get this color from theme
const Date = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: #696969;
  margin-bottom: 4px;
`

export type Post = {
  id: string,
  frontmatter: {
    title: string
    date: Date
    path: string
    excerpt: string
  }
}

type Props = {
  post: Post
}
const PostPreview = ({ post }: Props) => (
  <StyledLink to={post.frontmatter.path}>
    <Date>{format(post.frontmatter.date, 'DD MMMM, YYYY')}</Date>
    <Title>{post.frontmatter.title}</Title>
    {post.frontmatter.excerpt ? <p>{post.frontmatter.excerpt}</p> : null}
  </StyledLink>
)

export default PostPreview
