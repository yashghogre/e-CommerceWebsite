import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Errorpage from './components/Errorpage';
import Home from './components/Home';

function App() {

    return (
      <>
        <Routes>
          <Route path='*' element = {<Errorpage />} />
          <Route path='/' element = {<Home />} />
          <Route path='/home' element = {<Home />} />
        </Routes>
      </>
    )
  }

export default App
