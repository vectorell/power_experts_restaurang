import { useState } from 'react'
import './App.css'
import './base.css'
import Header from './components/Header'
import OpeningHours from './components/OpeningHours'
import HeroImage from './components/HeroImage'
import Varukorg from './components/Varukorg'


function App() {

  return (
    <div className="App">
      <Header/>
      <div className='landing-page'>
        <HeroImage/>
        <OpeningHours/>
      </div>
      <Varukorg/>
    </div>
  )
}

export default App
