import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 0 16px;
  max-width: 800px;
  margin: 0 auto;
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
              { name: 'theme-color', content: '#db7e32' },
            ]}
          >
            <link
              href="https://fonts.googleapis.com/css?family=Work+Sans:400,600"
              rel="stylesheet"
            />
            <html lang="en" />
          </Helmet>
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
