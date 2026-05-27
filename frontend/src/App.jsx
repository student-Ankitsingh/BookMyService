import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
     </Routes>
   </BrowserRouter>
  )
}

export default App