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
import './App.css'
import '../src/components/menu.css'
import MenuItems from './components/menu'
import drinkItems from './components/menu'

function App() {

  // Globala variabler/arrayer osv
  const contextValues = {
    foodItems,
  }

  return (
    <ContextProvider.Provider value={contextValues}>

      <div className="App">
        <div className='landing-page'>
          <HeroImage/>
          <OpeningHours/>
        </div>
        <Varukorg/>
      </div>

    <div className="main-container">
    <MenuItems items={foodItems}/>
    </div>
    </ContextProvider.Provider>
  )
}

export default App
