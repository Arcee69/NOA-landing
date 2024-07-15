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
import Gallery from '../pages/Media/Gallery'
import Contact from '../pages/Contact'
import StateOffices from '../pages/Agency/StateOffices'
import NoaPast from '../pages/Agency/NoaPast'
import Management from '../pages/Agency/Management'
import FOI from '../pages/Agency/FOI'
import NewsDetails from '../pages/News/components/NewsDetails'
import Quiz from '../pages/Hackathon/components/Quiz'


const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<NewsDetails />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/content-factory' element={<ContentFactory />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path='/hackathon/details' element={<Details />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/state-offices' element={<StateOffices />} />
        <Route path='/noa-past-executives' element={<NoaPast />} />
        <Route path="/management" element={<Management />} />
        <Route path="/foi" element={<FOI />} />
        <Route path="/quiz" element={<Quiz />} />
      </Route>
    </Routes>
  )
}

export default Routers
