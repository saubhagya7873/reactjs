import Movies from './components/Movies.jsx'
import { useState } from 'react'

import { createContext } from 'react';
const mainContext = createContext(); //create a global container
function App()
{
  const [name, setName] = useState("Prasad")
  let c=20;
  return (
    <div>
      <mainContext.Provider value={{name,c}}>
      <div style={{border:"2px solid red"}}>

        
        <Movies/>
        <button onClick={() => setName("Raj")}>Click Me</button>

      </div>
      </mainContext.Provider>
    </div>
  )
}
export default App
export {mainContext}