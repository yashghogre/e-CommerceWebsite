import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Errorpage />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
