import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import './App.css'
import './base.css'
import OpeningHours from './components/OpeningHours'
import HeroImage from './components/HeroImage'
import Varukorg from './components/Varukorg'
import foodItems from './assets/foodItems'

export const ContextProvider = React.createContext()

function App() {

  return (
    <ContextProvider.Provider value={foodItems}>

      <div className="App">
        <div className='landing-page'>
          <HeroImage/>
          <OpeningHours/>
        </div>
        <Varukorg/>
      </div>

    </ContextProvider.Provider>
  )
}

export default App
