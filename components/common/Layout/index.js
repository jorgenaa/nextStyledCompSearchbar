import React from 'react'
import { StickyContainer } from '../../styles/Layout.styled'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <StickyContainer>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </StickyContainer>
  )
}

export default Layout