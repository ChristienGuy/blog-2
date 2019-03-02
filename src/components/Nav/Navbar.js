import React, { useContext } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ToggleThemeContext } from '@src/themes'

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
  const { toggleTheme } = useContext(ToggleThemeContext)

  return (
    <div style={{ height: 100 }}>
      <Nav>
        <HomeLink to="/">CG</HomeLink>
        <button onClick={toggleTheme}>dark</button>
        <NavLink as="a" to="https://twitter.com/christien_guy">
          <FontAwesomeIcon icon={faTwitter} />
        </NavLink>
        <NavLink as="a" to="https://github.com/ChristienGuy">
          <FontAwesomeIcon icon={faGithub} />
        </NavLink>
      </Nav>
    </div>
  )
}

export default Navbar
