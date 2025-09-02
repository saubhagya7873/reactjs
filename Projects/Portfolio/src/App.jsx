
import React from 'react'

import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Project from './Pages/Project'

import Header from "./Componets/Header"
import Footer from "./Componets/Footer"

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path="/about" Component={About} />
        <Route path="/project" Component={Project} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
