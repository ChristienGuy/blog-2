import React from 'react'
import styled from 'styled-components'
import { ToggleThemeType, ThemeState } from '@src/ThemeProvider'
import Toggle from '@components/Toggle'
import { useEffect, useState, useContext } from 'react'
import { ToggleThemeContext } from '@themes'

const ToggleStyled = styled(Toggle)`
  margin: 0 16px;
`

const ThemeToggle = () => {
  const { changeTheme, themeState } = useContext<ToggleThemeType>(
    ToggleThemeContext
  )

  const toggleTheme = () => {
    if (themeState === ThemeState.LIGHT) {
      changeTheme({ themeState: ThemeState.DARK })
    } else {
      changeTheme({ themeState: ThemeState.LIGHT })
    }
  }

  if (themeState !== null) {
    const toggleState =
      themeState === ThemeState.LIGHT ? Toggle.States.OFF : Toggle.States.ON
    return (
      <ToggleStyled
        id="theme-toggle"
        onChange={toggleTheme}
        toggleState={toggleState}
      />
    )
  }

  return null
}

export default ThemeToggle
