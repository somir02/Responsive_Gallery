import React from 'react'
import Home from './pages/Home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './pages/Gallery/gallery'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
