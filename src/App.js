import React from 'react'
import Header from './Components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
    </>
  )
}

