import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import '../styles/Layout.css'

const Layout = () => {
  return (
    <>
        <Navbar />  
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
