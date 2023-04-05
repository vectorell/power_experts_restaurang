import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import './App.css'
import './base.css'
import OpeningHours from './components/OpeningHours'
import HeroImage from './components/HeroImage'
import Varukorg from './components/Varukorg'

export const ContextProvider = React.createContext()

const foodItems = [
  { id: 0, image: '../src/components/menu-img/carbonara.jpg', name: 'Pasta Carbonara', price: '179:-', description: 'Bacon, parmesan, ägg, olivolja, salt, peppar'},
  { id: 1, image: '../src/components/menu-img/kycklingpasta.jpg', name: 'Krämig kycklingpasta', price: '179:-', description: 'Kyckling, paprika, lök, grädde, cream cheese, salt, peppar, paprikapulver, basilika'},
  { id: 2, image: '../src/components/menu-img/vegetarisk-pasta.jpg', name: 'Vegetarisk pasta bolognese med blomkål', price: '179:-', description: 'Brun champinjon, blomkål, lök, chili, tomat, parmesan, salt, peppar'},
  { id: 3, image: '../src/components/menu-img/libapizza.jpg', name: 'Libapizza', price: '149:-', description: 'Libabröd, ost, skinka, tomatsås, champinjoner, annanas'},
  { id: 4, image: '../src/components/menu-img/vegpizza.jpg', name: 'Vegetarisk pizza med squash', price: '149:-', description: 'Tomatsås, mozarella, parmesan, blomkål, squash, körsbärstomater, olivolja'},
  { id: 5, image: '../src/components/menu-img/sardellpizza.jpg', name: 'Sardell och burratapizza', price: '149:-', description: 'Färskost, créme fraiche, körsbärstomater, kronärtskockor, röd chili, sardeller, pecorino'},
  { id: 6, image: '../src/components/menu-img/rödkålssallad.jpg', name: 'Rödkålssallad med fikon', price: '169:-', description: 'Rödkål, balsamvinäger, svartvinbärssirap, kanisfrön, kanel, fikon, salt, peppar'},
  { id: 7, image: '../src/components/menu-img/pastasallad.jpg', name: 'Pastasallad med kyckling och pesto', price: '169:-', description: 'Kyckling, soltorkade tomater, pesto, créme fraiche, ruccola, ost, salt, peppar'},
  { id: 8, image: '../src/components/menu-img/rödbetssallad.jpg', name: 'Rödbetssallad med feta och pistage', price: '169:-', description: 'Rödbeta, baby leaf sallad, feta, pistagenötter, färska örter, olivolja, nötölja, salt, peppar'},
  { id: 9, image: '../src/components/menu-img/kycklingburgare.jpg', name: 'Pulled kycklingburgare', price: '179:-', description: 'Kyckling, äppelmust, bbq-sås, vitlök, farinsocker, spiskummin, chilipulver, fänkålsfrön, salt, peppar'},
  { id: 10, image: '../src/components/menu-img/älgburgare.jpg', name: 'Älgburgare', price: '199:-', description: 'Älgfärs, bacon, dijonsenap, ägg, grädde, lök, salt, peppar, timjan, rårörda lingon, gräddfil'},
  { id: 11, image: '../src/components/menu-img/vegburgare.jpg', name: 'Halloumiburgare', price: '179:-', description: 'Halloumi, sötpotatis, kikärtor, lök, chili, paprikapulver, spiskummin, salt, peppar'},
  { id: 12, image: '../src/components/menu-img/coca cola.jpg', name: 'Coca-cola', price: '30:-'},
  { id: 13, image: '../src/components/menu-img/fanta.jpg', name: 'Fanta', price: '30:-'},
  { id: 14, image: '../src/components/menu-img/sprite.jpg', name: 'Sprite', price: '30:-'}
];



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
