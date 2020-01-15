/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import ThemeProvider from '@src/ThemeProvider'
import PageElement from '@src/PageElement'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export const wrapPageElement = ({ element }) => (
  <PageElement>{element}</PageElement>
)
