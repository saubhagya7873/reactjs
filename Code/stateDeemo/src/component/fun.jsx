import React from 'react'
import { useState } from 'react'

function fun() {
  const [na, setNA] = useState("saubhagya")
  const handleClick = () => {
    //setNA("Mr. Sahoo")
    setNA((na) => na + "Sahoo")
  }

  const [count, setCount] = useState(0)
  
  const [length, setLength] = useState(0)
  const handleChange = (l)=>{
    setLength(l.length)
  }
  return (
    <div>
      <p>{na}</p>
      <button onClick = {handleClick}>click me</button>

      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      <p>No of character : {length}</p>
      <input type="text" onChange={(e)=>handleChange(e.target.value)}/>

    </div>
  )
}

export default fun
