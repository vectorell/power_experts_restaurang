import { useState } from 'react'
import './App.css'
import OpeningHours from './components/OpeningHours'
import HeroImage from './components/HeroImage'
import './base.css'
import Varukorg from './components/Varukorg'

function App() {

  return (
    <div className="App">
      <div className='landing-page'>
        <HeroImage/>
        <OpeningHours/>
        <Varukorg />
      </div>
    </div>
  )
}

export default App
