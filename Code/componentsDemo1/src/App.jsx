import Header from "./components/Footer";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import './App.css'
import { Fragment } from "react";
function App()
{
  return (
    <>
        <Header />
        <div className="movies">
          {Array(6).map((v)=>( <Movie /> ) )}   
        </div>
        <Footer />    
    </>
  )
}
export default App