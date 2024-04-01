import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Nav from './Components/nav/Nav'
import Whatsapp from './Components/Whatsapp/Whatsapp'


function Layout() {
  return (
    <div>
      
      <Header/>
      <Whatsapp/>
      <Outlet />
      <Footer className="flex flex-col items-center justify-center w-full" />
      
    </div>
  )
}

export default Layout