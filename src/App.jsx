import React from 'react'
import './App.css'
import Nav from './Component/Nav/Nav'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurStory from './Component/OurStory/OurStory'
import Membership from './Component/Membership/Membership'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='' element={<Header />} />
            <Route path='OurStory' element={<OurStory />} />
            <Route path='Membership' element={<Membership />} />
          </Routes>
        </BrowserRouter>

            <Footer />
            
      </div>
    </>
  )
}

export default App
