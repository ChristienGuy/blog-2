import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '@components/GlobalStyle'
import { lightTheme, darkTheme, ToggleThemeContext } from '@src/themes'

const ThemeState = {
  LIGHT: 'light',
  DARK: 'dark',
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const changeTheme = ({ themeState }) => {
    if (themeState === ThemeState.LIGHT) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }

  const toggleThemeContext = {
    changeTheme,
    ThemeState,
  }

  return (
    <ToggleThemeContext.Provider value={toggleThemeContext}>
      <StyledThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyledThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ThemeProvider
