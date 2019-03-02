import React, { useContext } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ToggleThemeContext } from '@src/themes'
import Toggle from '../Toggle'

const ExternalNavLink = styled.a`
  padding: 16px;
  color: ${ ({ theme }) => theme.colors.primaryText };
`

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: ${ ({ theme }) => theme.colors.background };
  border-top: 3px solid ${ ({ theme }) => theme.colors.primary };
`

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: #333;
  margin-right: auto;
`

const Navbar = () => {
  const { changeTheme, ThemeState } = useContext(ToggleThemeContext)

  const toggleTheme = ({ toggleState }) => {
    console.log(toggleState)

    if (toggleState === Toggle.States.ON) {
      changeTheme({ themeState: ThemeState.DARK })
    } else {
      changeTheme({ themeState: ThemeState.LIGHT })
    }
  }

  return (
    <div style={{ height: 100 }}>
      <Nav>
        <HomeLink to="/">CG</HomeLink>
        <Toggle onChange={toggleTheme} />
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
