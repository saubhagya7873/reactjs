import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  function handlePage()
  {
    navigate('about')
  }
  return (
    <div>
      <h1>This is my Home page</h1>
      <button onClick={handlePage} className='bg-emerald-400 p-2 text-2xl text-white rounded-3xl'>Go to page</button>
    </div>
  )
}

export default Home
