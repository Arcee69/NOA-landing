import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/Home'
import About from '../pages/Agency/About'
import News from '../pages/News'
import Privacy from '../pages/Activities/Privacy'
import ContentFactory from '../pages/Media/Content'
import Hackathon from '../pages/Hackathon'
import Details from '../pages/Hackathon/components/Details'


const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/content-factory' element={<ContentFactory />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path='/hackathon/details' element={<Details />} />
      </Route>
    </Routes>
  )
}

export default Routers
