import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='' element={<Home />}/>   
          <Route path='about' Component={About} >
            <Route path='contact' Component={Contact} />
          </Route>
          <Route path='contact' Component={Contact} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
