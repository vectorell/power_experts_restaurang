import { useState } from 'react'
import './App.css'
import '../src/components/menu.css'
import MenuItems from './components/menu'
import foodItems from './components/menu'
import drinkItems from './components/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
    <MenuItems items={foodItems}/>
    </div>
  )
}

export default App
