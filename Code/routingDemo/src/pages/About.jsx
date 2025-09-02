import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {
  return (
    <div className=' text-center text-fuchsia-800 text-3xl font-bold'>
      <Outlet />
      <h1>This is about component</h1>
      <Link to='contact' className=' text-blue-700 decoration-1'>Contact</Link>
      <Outlet />
    </div>
  )
}

export default About
