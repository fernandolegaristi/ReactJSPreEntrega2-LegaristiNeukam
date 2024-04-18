import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./components/NavBar"
import ItemContainer from "./components/ItemsContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <body className='d-flex flex-column'>
        <NavBar />
            <Routes>
            <Route path="/" element={<ItemContainer/>} />
            <Route path="/category/:id" element={<ItemContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            
          </Routes>
        
      </body>
    </>
  )
}

export default App
