import { useState } from 'react'
import './App.css'
import './base.css'
import OpeningHours from './components/OpeningHours'
import HeroImage from './components/HeroImage'
import Varukorg from './components/Varukorg'


function App() {

  return (
    <div className="App">
      <div className='landing-page'>
        <HeroImage/>
        <OpeningHours/>
      </div>
      <Varukorg/>
    </div>
  )
}

export default App
