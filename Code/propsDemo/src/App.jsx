import Book from "./Book"
import './App.css'
import image from './assets/thealchemist.jpg'
function App()
{
  return (
    <div className="books">
      <Book name = "secret" imgLink = "secret.jpg" >
        <button>Add to cart</button>
      </Book>
      <Book name = "Wings of Fire" imgLink = "wingsoffire.jpg" > 
        <button>Add to cart</button>
      </Book>
      <Book name = "Rich Dad Poor Dad" imgLink = "richdadpoordad.jpg" >
        <button>Add to cart</button>
      </Book>
      {/* Another concept to upload image */}
      {/* this image in the assets folder */}
      <Book name = "The Alchemist" imgLink = {image} >
        <button>Add to cart</button>
      </Book>
    </div>
  )
}
export default App