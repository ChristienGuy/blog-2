import React, { useState, Fragment, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '@components/GlobalStyle'
import { lightTheme, darkTheme, ToggleThemeContext } from '@src/themes'
import Navbar from '@components/Nav/Navbar'

export enum ThemeState {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ToggleThemeType = {
  changeTheme: ({ themeState }: { themeState: ThemeState }) => void
  themeState: ThemeState | null
}

type Props = {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(lightTheme)
  const [themeState, setThemeState] = useState(null)

  useEffect(() => {
    const themeState: string = window.localStorage.getItem('theme')

    if (themeState) {
      changeTheme({ themeState })
    } else {
      changeTheme({ themeState: ThemeState.LIGHT })
    }
  })

  const changeTheme = ({ themeState }: { themeState: ThemeState }) => {
    if (themeState === ThemeState.LIGHT) {
      setTheme(lightTheme)
      setThemeState(ThemeState.LIGHT)
    } else {
      setTheme(darkTheme)
      setThemeState(ThemeState.DARK)
    }
    window.localStorage.setItem('theme', themeState.toString())
  }

  const toggleThemeContext = {
    changeTheme,
    themeState,
  }

  return (
    <ToggleThemeContext.Provider value={toggleThemeContext}>
      <StyledThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Navbar />
          {children}
        </Fragment>
      </StyledThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ThemeProvider
