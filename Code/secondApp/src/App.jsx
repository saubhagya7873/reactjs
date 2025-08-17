import Header from "./components/Header"
function App()
{
  let name = "React JS";
  let name2 = "raj"
  // console.log(name);

  return(
    <>
      <p>{name2}</p>    
      <h1>Welcome to {name}</h1>
      <h2>Hello Mr.</h2>
      <Header />
    </>
  )
}
export default App