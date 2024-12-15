import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Food from './pages/Home'
import Timer from './pages/Timer'
import Pagee from './layouts/Pagee'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Pagee><Food></Food></Pagee>}></Route>
        <Route path='/timer' element={<Pagee><Timer></Timer></Pagee>}></Route>
      </Routes>
    </div>
  )
}

export default App