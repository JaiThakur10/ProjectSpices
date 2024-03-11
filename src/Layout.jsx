import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header className="flex justify-center items-center w-full p-[px] bg-yellow-50" />
      <Outlet />
      <Footer className="flex flex-col items-center justify-center w-full" />
    </div>
  )
}

export default Layout