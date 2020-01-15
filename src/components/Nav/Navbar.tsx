import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const ExternalNavLink = styled.a`
  padding: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
`

const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: auto;
`

const Navbar = () => {
  return (
    <div style={{ height: 56 }}>
      <Nav>
        <HomeLink to="/">CG</HomeLink>
        <ExternalNavLink
          href="https://twitter.com/christien_guy"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </ExternalNavLink>
        <ExternalNavLink
          href="https://github.com/ChristienGuy"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </ExternalNavLink>
      </Nav>
    </div>
  )
}

export default Navbar
