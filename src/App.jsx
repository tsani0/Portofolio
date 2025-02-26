import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Background from './components/background'

import TypeIt from "typeit-react";

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/*Navbar*/}
      <Navbar />
      <Background />

    {/*content*/}
      <Home />

    {/*Footer*/}
      <Footer/>
      
    </>
  )
}

export default App
