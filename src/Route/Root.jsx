import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../Utilit/NavBar'
import Footer from '../Utilit/Footer'

const Root = () => {
  return (
    <div>
        <NavBar />
        <Outlet></Outlet>
        <Footer />
        
    </div>
  )
}

export default Root