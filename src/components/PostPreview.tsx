import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'

const StyledLink = styled(Link)`
  transition: ${({ theme }) => theme.themeTransition('color')};
  color: ${ ({ theme }) => theme.colors.primaryText };
  text-decoration: none;
`

const Title = styled.h2`
  transition: ${({ theme }) => theme.themeTransition('color')};
  color: ${ ({ theme }) => theme.colors.primary };
  margin-bottom: 0px;
`

// TODO: get this color from theme
const Date = styled.span`
  font-size: 0.75rem;
  color: #9e9e9e;
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
    <Title>{post.frontmatter.title}</Title>
    <Date>{format(post.frontmatter.date, 'DD MMMM, YYYY')}</Date>
    {post.frontmatter.excerpt ? <p>{post.frontmatter.excerpt}</p> : null}
  </StyledLink>
)

export default PostPreview
