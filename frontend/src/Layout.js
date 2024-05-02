import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'

function Layout({children}) {
  return (
    <React.Fragment>
      <Header/>
      <React.Fragment>
        {children}
      </React.Fragment>
      <Footer/>
    </React.Fragment>
  )
}

export default Layout