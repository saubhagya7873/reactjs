import React from 'react'

function Movie(props) {
  return (
    <div>
        {props.children}
        <img src={props.image} alt={props.name} height={400} />
        <h2>{props.name}</h2>
        <button onClick={() => props.handleCount(10)}>Click Me</button>
    </div>
  )
}

export default Movie
