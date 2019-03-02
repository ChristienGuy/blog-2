import styled from 'styled-components'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  padding: 16px;
  color: ${ ({ theme }) => theme.colors.primaryText };
`

export default NavLink
