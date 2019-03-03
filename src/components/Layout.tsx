import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Navbar from './Nav/Navbar'

const Wrapper = styled.main`
  padding: 16px 16px;
`

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'A blog about web stuff' },
              { name: 'keywords', content: 'web' },
            ]}
          >
            <link
              href="https://fonts.googleapis.com/css?family=Work+Sans:400,600"
              rel="stylesheet"
            />
            <html lang="en" />
          </Helmet>
          <Navbar />
          <Wrapper>{children}</Wrapper>
        </Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
