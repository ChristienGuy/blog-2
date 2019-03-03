import React, { useState, Fragment } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '@components/GlobalStyle'
import { lightTheme, darkTheme, ToggleThemeContext } from '@src/themes'

export enum ThemeState {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ToggleThemeType = {
  changeTheme: ({
    themeState,
  }: {
  themeState: ThemeState.LIGHT | ThemeState.DARK
  }) => void
}

type Props = {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(lightTheme)

  const changeTheme = ({ themeState }: { themeState: ThemeState }) => {
    if (themeState === ThemeState.LIGHT) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }

  const toggleThemeContext = {
    changeTheme,
  }

  return (
    <ToggleThemeContext.Provider value={toggleThemeContext}>
      <StyledThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          {children}
        </Fragment>
      </StyledThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ThemeProvider
