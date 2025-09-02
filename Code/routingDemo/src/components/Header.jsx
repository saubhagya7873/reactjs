import React from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'
function Header() {
  return (
    <div className=' flex bg-black text-white justify-between items-center p-4'>
      <h2 className=' text-3xl'>SAUBHAGYA</h2>
      <nav>
        <ul className=' flex gap-3 text-2xl md:text-3xl lg:text-4xl'>
            <li><Link to='' className=' hover:text-blue-800'>Home</Link></li>
            <li><Link to='about' className=' hover:text-blue-800'>About</Link></li>
            <li><Link to='contact' className=' hover:text-blue-800'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
