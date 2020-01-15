import React from 'react'
import GlobalStyle from '@components/GlobalStyle'
import Navbar from '@components/Nav/Navbar'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
  </>
)
