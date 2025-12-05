import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './create'
import Delete from './delete'
import Read from './read'
import Update from './update'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/create' element={<Create/>}></Route>
              <Route path='/delete' element={<Delete/>}></Route>
              <Route path='/read/:id' element={<Read/>}></Route>
              <Route path='/update/:id' element={<Update/>}></Route>

          </Routes>
      </Router>


    </>
  ) 
}

export default App