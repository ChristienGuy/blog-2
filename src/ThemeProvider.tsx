import React, { useState, Fragment, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '@components/GlobalStyle'
import { lightTheme, darkTheme, ToggleThemeContext } from '@src/themes'

export enum ThemeState {
  LIGHT,
  DARK,
}

export type ToggleThemeType = {
  changeTheme: ({
    themeState,
  }: {
  themeState: ThemeState
  }) => void,
  themeState: ThemeState,
}

type Props = {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const themeState: ThemeState = +window.localStorage.getItem('theme')
    changeTheme({ themeState: themeState })
  }, [])

  const changeTheme = ({ themeState }: { themeState: ThemeState }) => {
    if (themeState === ThemeState.LIGHT) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
    window.localStorage.setItem('theme', themeState.toString())
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
