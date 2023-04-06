import { useState } from 'react' ;
import './App.css'

import InLoggning from './personal-sidan';
import {HeaderPage} from './personal-sidan'


function App() {

  return (
    <div className = "App">
      < HeaderPage />
      < InLoggning />
      

    </div>
  )
}

export default App
