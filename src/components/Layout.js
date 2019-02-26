import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import lightTheme from '@themes/lightTheme'
import { Provider as ThemeChangeProvider } from '@src/themeChangeContext'

import GlobalStyle from './GlobalStyle'
import Navbar from './Nav/Navbar'
import darkTheme from '../themes/darkTheme'

const Wrapper = styled.main`
  padding: 0 16px;
`

const ThemeState = {
  LIGHT: 'light',
  DARK: 'dark',
}

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const [themeState, setThemeState] = useState(ThemeState.LIGHT)

  const themeChangeContext = {
    darkMode: () => {
      setTheme(darkTheme)
    },
    toggleTheme: () => {
      if (themeState === ThemeState.LIGHT) {
        setTheme(darkTheme)
        setThemeState(ThemeState.DARK)
      } else {
        setTheme(lightTheme)
        setThemeState(ThemeState.LIGHT)
      }
    },
  }

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
          <ThemeChangeProvider value={themeChangeContext}>
            <ThemeProvider theme={theme}>
              <>
                <GlobalStyle />
                <Navbar />
                <Wrapper>{children}</Wrapper>
              </>
            </ThemeProvider>
          </ThemeChangeProvider>
        </Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
