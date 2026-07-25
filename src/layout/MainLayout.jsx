import React from 'react'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default MainLayout