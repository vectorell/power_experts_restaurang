import React from 'react'
import { useState, createContext, useContext } from 'react'
import './App.css'
import './base.css'
import Header from './components/Header'
import OpeningHours from './components/OpeningHours'
import HeroImage from './components/HeroImage'
import Varukorg from './components/Varukorg'
import foodItems from './assets/foodItems'


export const ContextProvider = React.createContext()
import '../src/components/menu.css'
import MenuItems from './components/menu'
import drinkItems from './components/menu'

function App() {
	const [selectedFoodItems, setSelectedFoodItems] = useState([])
	const [showLandingPage, setShowLandingPage] = useState(true)
	const [showVarukorg, setShowVarukorg] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	

  function navigateTo(page) {
    const pages = [
      {name: 'landing', variable: "setShowLandingPage"},
      {name: 'menu', variable: "setShowMenu"},
      {name: 'varukorg', variable: "setShowVarukorg"}
    ]

    pages.forEach((p) => {
      // om inparameter är 'menu', så blir p.name med 'menu' true.
      let showPage = (p.name === page)
      const setStateFunction = contextValues[p.variable]
      setStateFunction(showPage)
    })
  }

  // Globala variabler/arrayer osv
  const contextValues = {
    foodItems,
    selectedFoodItems,
    setSelectedFoodItems,
    showLandingPage,
    setShowLandingPage,
    showVarukorg,
    setShowVarukorg,
    showMenu,
    setShowMenu,
    navigateTo,
  }

	return (
		<ContextProvider.Provider value={contextValues}>

		<div className="App">
			<Header/>

			<div className='landing-page'>
			{showLandingPage && <HeroImage/>}
			{showLandingPage && <OpeningHours/>}
			</div>
			{showVarukorg && <Varukorg/>}
		</div>

		<div className="main-container">
		{showMenu && <MenuItems items={foodItems}/>}
		</div>
		</ContextProvider.Provider>
	)
}

export default App
