import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme } from '@src/themes'

type Props = {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  return <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>
}

export default ThemeProvider
