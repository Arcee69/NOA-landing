import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'



const Layout = () => {

  const location  = useLocation()
  return (
    <div
    >
        <div className='w-full hidden xl:block'>
            <Header />
        </div>
        
        <div>
            <Outlet />
        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Layout