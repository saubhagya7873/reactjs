import React,{useContext} from 'react'
import {mainContext} from "../App.jsx"
function SocialMedia() {
    const {name, c} = useContext(mainContext)
  return (
    
      <div style={{border:"2px solid green",padding:"10px"}}>
        <p>{name}</p>
        <p>{c}</p>
      </div>
    
  )
}

export default SocialMedia 
// Exporting the SocialMedia
