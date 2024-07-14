import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import ComNavbar from '../navbar'

function MainLayout() {
  return (
    <div>
        <ComNavbar></ComNavbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout