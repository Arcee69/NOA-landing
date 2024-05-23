import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import MiniHeader from './MiniHeader'



const Layout = () => {

  const location  = useLocation()
  return (
    <div
      className='overflow-x-hidden'
    >
        <div className='w-full hidden xl:block'>
            <Header />
        </div>
        <div className='flex xl:hidden'>
          <MiniHeader />
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