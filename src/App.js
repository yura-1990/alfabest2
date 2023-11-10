import React, { useEffect } from 'react'
import Header from './Components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { gsap } from 'gsap';

export default function App() {
  
  useEffect(() => {
    gsap.to('body', { rotate: 360, duration: 5 })
  }, [])
  
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
      <Footer />
    </>
  )
}

