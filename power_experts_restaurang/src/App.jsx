import React from 'react'
import { useState, createContext, useContext } from 'react'
import './App.css'
import './base.css'
import Header from './components/Header'
import Varukorg from './components/Varukorg'
import foodItems from './assets/foodItems'
import LandingPage from './components/LandingPage'
import Inloggning from './components/PersonalSidan'

export const ContextProvider = React.createContext()
import '../src/components/menu.css'
import MenuItems from './components/menu'
import drinkItems from './components/menu'
import AddNewDish from './components/AddNewDish'


function App() {
  const [selectedFoodItems, setSelectedFoodItems] = useState([])
  const [showLandingPage, setShowLandingPage] = useState(true)
  const [showVarukorg, setShowVarukorg] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showAddNewDish, setShowAddNewDish] = useState(false)
  const [foodItemsArray, setFoodItemsArray] = useState(foodItems)
  const [showInloggning, setShowInloggning] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function navigateTo(page) {
    const pages = [
      {name: 'landing', variable: "setShowLandingPage"},
      {name: 'menu', variable: "setShowMenu"},
      {name: 'varukorg', variable: "setShowVarukorg"},
      {name: 'newDish', variable: "setShowAddNewDish"},
      {name: 'inloggning' , variable: "setShowInloggning"}
    ]
    
    pages.forEach((p) => {
      // om inparameter är 'menu', så blir p.name med 'menu' true.
      let showPage = (p.name === page)
      const setStateFunction = contextValues[p.variable]
      setStateFunction(showPage)
    })
  }
  
  // Hämta maträtter från localStorage om det finns lagrade maträtter
  const storedFoodItems = JSON.parse(localStorage.getItem("foodItems"));
  // const items = storedFoodItems || foodItems;
  const [items, setItems] = useState(storedFoodItems || foodItems)

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
    showAddNewDish,
    setShowAddNewDish,
    navigateTo,
    foodItemsArray,
    setFoodItemsArray,
    storedFoodItems,
    items,
    setItems,
    showInloggning,
    setShowInloggning,
    isLoggedIn,
    setIsLoggedIn,
  }

	return (
		<ContextProvider.Provider value={contextValues}>

		<div className="App">
			<Header/>
			{showAddNewDish && <AddNewDish/>}
			{showLandingPage && <LandingPage/>}
			{showInloggning && <Inloggning/>}
			{showVarukorg && <Varukorg/>}
		</div>

		<div className="main-container">
		{showMenu && <MenuItems items={foodItems}/>}
		</div>
		</ContextProvider.Provider>
	)
}

export default App
