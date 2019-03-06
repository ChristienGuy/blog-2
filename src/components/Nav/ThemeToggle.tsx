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
  const [toggleState, setToggleState] = useState(Toggle.States.OFF)
  const { changeTheme, themeState } = useContext<ToggleThemeType>(
    ToggleThemeContext
  )

  useEffect(() => {
    if (themeState === ThemeState.LIGHT) {
      setToggleState(Toggle.States.OFF)
    } else {
      setToggleState(Toggle.States.ON)
    }
  }, [ themeState ])

  const toggleTheme = () => {
    if (themeState === ThemeState.LIGHT) {
      changeTheme({ themeState: ThemeState.DARK })
      setToggleState(Toggle.States.ON)
    } else {
      changeTheme({ themeState: ThemeState.LIGHT })
      setToggleState(Toggle.States.OFF)
    }
  }

  useEffect(() => {
    setToggleState(
      themeState === ThemeState.LIGHT ? Toggle.States.OFF : Toggle.States.ON
    )
  }, [])

  return (
    <ToggleStyled
      id="theme-toggle"
      onChange={toggleTheme}
      toggleState={toggleState}
    />
  )
}

export default ThemeToggle
