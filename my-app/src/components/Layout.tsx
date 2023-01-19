import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <NavBar/>
        <main>
            {children}
        </main>
    <Footer/>
    </>
  )
}

type LayoutProps = {
    children: React.ReactNode;
}

export default Layout