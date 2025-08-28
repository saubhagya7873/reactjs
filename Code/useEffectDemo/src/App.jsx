import { useEffect, useState } from "react"
import "./App.css"
function App()
{
  const [count, setCount] = useState(0)
  const [data, setData] = useState({})
  useEffect( function () {
    //setTimeout( ()=>console.log("Hello from useEffect"), 2000 )

    // fetch("https://dummyjson.com/quotes/random")
    // .then((res) => res.json())
    // .then((data) => setData(data))
    // .catch((err) => console.log(err))
    async function DisplayData()
    {
      try
      {
        const res = await fetch("https://dummyjson.com/quotes/random")
        const data = await res.json()
        setData(data)
      }
      catch(err)
      {
        console.log(err)
      }
    }
    setInterval(()=>DisplayData(), 3000);
  },[])

  return (
    <div>
      {/* <p>Count : {count}</p>
      <button onClick={()=>setCount(count+1)}>Click me</button> */}

      <h2>{data.quote}</h2>
      <p>{data.author}</p>
    </div>
  )
}
export default App