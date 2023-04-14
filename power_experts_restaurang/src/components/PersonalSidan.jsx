import { ContextProvider } from "../App";
import { useContext, useState } from "react"
import './PersonalSidan.css'

export function HeaderPage () {
    return(
        <h1 className="title"> PersonalInloggning </h1>
    );
}

const Inloggning = () => {
  const dataFromParent = useContext(ContextProvider)
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  const database = [
    {
      username: "mums",
      password: "mums"
    }
  ];

  const errors = {
    wrongName: "Vänligen fyll i ett giltigt användarnamn",
    wrongPass: "Ogiltigt lösenord"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);
    
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.wrongPass });
      } else {
        setIsSubmitted(true);
        console.log(dataFromParent.isLoggedIn)
        dataFromParent.setIsLoggedIn((true))
        console.log(dataFromParent.isLoggedIn)
      }
    } else {
      // Username not found
      setErrorMessages({ name: "wrongName", message: errors.wrongName });
    }
  };
  

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error"> {errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="title-page">Personalinloggning</div>
        <div className="input-container">
          <input type="text" name="uname" required placeholder="Användernamn" className="inlogg-input" />
        <div className="error"> {renderErrorMessage("wrongName")} </div>
        </div>
        <div className="input-container2">
          <input className="inlogg-input" type="password" name="pass" required placeholder="Lösenord" />
          <div className="error"> {renderErrorMessage("pass")}</div>
        </div>
          <button type="submit" > Logga in </button>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div >
        {isSubmitted ? (
          <div>
            <p>User is successfully logged in</p>
          </div>
        ) 
        
        : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default Inloggning;

