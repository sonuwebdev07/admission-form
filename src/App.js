import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Admission from './components/admission/Admission'
import Data from './components/data/Data'
import Update from './components/update/Update'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Admission/>} />
      <Route path='data' element={<Data/>} />
      <Route path='update/:id' element={<Update/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
