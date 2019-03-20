import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ThemeToggle from './ThemeToggle';

const ExternalNavLink = styled.a`
  padding: 16px;
  color: ${ ({ theme }) => theme.colors.primaryText };
`

const Nav = styled.nav`
  display: flex;
  align-items: center;

  transition: ${ ({ theme }) => theme.themeTransition('background') };
  background: ${ ({ theme }) => theme.colors.background };
  border-top: 3px solid ${ ({ theme }) => theme.colors.primary };
`

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: 20px;
  transition: ${ ({ theme }) => theme.themeTransition('color') };
  color: ${ ({ theme }) => theme.colors.primary };
  margin-right: auto;
`

const Navbar = () => {
  return (
    <div style={{ height: 56 }}>
      <Nav>
        <HomeLink to="/">CG</HomeLink>
        <ThemeToggle />
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
