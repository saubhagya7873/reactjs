import React from 'react'

function Book(props) {
  return (
    <div>
      <img src={props.imgLink} alt="scret" />
      <h2>{props.name}</h2>
      {props.children}     
    </div>
  )
}

export default Book
