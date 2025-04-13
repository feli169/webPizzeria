import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from './components/NavBar/Nav'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Nav/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
