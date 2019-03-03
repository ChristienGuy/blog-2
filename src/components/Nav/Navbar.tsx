import React, { useContext } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ToggleThemeContext } from '@themes'
import Toggle from '../Toggle'
import { ToggleThemeType, ThemeState } from '@src/ThemeProvider'

const ThemeToggle = styled(Toggle)`
  margin: 0 16px;
`

const ExternalNavLink = styled.a`
  padding: 16px;
  color: ${ ({ theme }) => theme.colors.primaryText };
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  transition: ${ ({ theme }) => theme.themeTransition('background') };
  background: ${ ({ theme }) => theme.colors.background };
  border-top: 3px solid ${ ({ theme }) => theme.colors.primary };
`

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: ${ ({ theme }) => theme.themeTransition('color') };
  color: ${ ({ theme }) => theme.colors.textPrimary };
  margin-right: auto;
`

const Navbar = () => {
  const { changeTheme, themeState } = useContext<ToggleThemeType>(
    ToggleThemeContext
  )

  const toggleTheme = ({ toggleState }: { toggleState: Toggle.States }) => {
    if (toggleState === Toggle.States.ON) {
      changeTheme({ themeState: ThemeState.DARK })
    } else {
      changeTheme({ themeState: ThemeState.LIGHT })
    }
  }

  const toggleState =
    themeState === ThemeState.LIGHT ? Toggle.States.OFF : Toggle.States.ON

  return (
    <div style={{ height: 100 }}>
      <Nav>
        <HomeLink to="/">CG</HomeLink>
        <ThemeToggle id="theme-toggle" onChange={toggleTheme} defaultState={toggleState} />
        <ExternalNavLink href="https://twitter.com/christien_guy">
          <FontAwesomeIcon icon={faTwitter} />
        </ExternalNavLink>
        <ExternalNavLink href="https://github.com/ChristienGuy">
          <FontAwesomeIcon icon={faGithub} />
        </ExternalNavLink>
      </Nav>
    </div>
  )
}

export default Navbar
