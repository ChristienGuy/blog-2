import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const navLinkStyles = css`
  padding: 16px;
  color: ${ ({ theme }) => theme.colors.primaryText };
`
const NavLink = styled(Link)`
  ${ navLinkStyles };
`

export default NavLink
