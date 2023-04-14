import { useState } from 'react' ;
import './App.css'
import './inloggning.css'
import {LastNameForm} from './formulär-validering'
import {FirstNameForm} from './formulär-validering'

import InLoggning from './personal-sidan';
import {HeaderPage} from './personal-sidan'


function App() {

  return (
    <div className = "App">
      < HeaderPage />
      < InLoggning />
      <FirstNameForm />
      <LastNameForm />

    </div>
  )
}

export default App
