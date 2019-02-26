import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`

const StyledTitle = styled.h2`
  color: ${ ({ theme }) => theme.colors.primary };
  margin-bottom: 0px;
`

const Date = styled.span`
  font-size: 0.75rem;
  color: #9e9e9e;
`

const PostPreview = ({ post }) => (
  <StyledLink to={post.frontmatter.path}>
    <StyledTitle>{post.frontmatter.title}</StyledTitle>
    <Date>{format(post.frontmatter.date, 'DD MMMM, YYYY')}</Date>
    {post.frontmatter.excerpt ? <p>{post.frontmatter.excerpt}</p> : null}
  </StyledLink>
)

export default PostPreview
