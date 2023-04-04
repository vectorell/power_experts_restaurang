import { useState } from 'react'
import './App.css'
import '../src/components/menu.css'
import MenuItems from './components/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
    <MenuItems />
    </div>
  )
}

export default App
