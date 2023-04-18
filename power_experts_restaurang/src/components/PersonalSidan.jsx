import { ContextProvider } from "../App";
import { useContext, useState } from "react"
import './PersonalSidan.css'
import { useRef } from "react";

export function HeaderPage () {
    return(
        <h1 className="title"> PersonalInloggning </h1>
    );
}

/*const Inloggning = () => {
  const dataFromParent = useContext(ContextProvider)
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const nameForm = useRef(null)

  const database = [
    {
      username: "personal@feastfare.se",
      password: "mums"
    }
  ];

  const errors = {
    wrongPass: "Ogiltigt lösenord eller användarnamn, vänligen kontrollera stavningen."
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
        dataFromParent.setIsLoggedIn((true))

        setTimeout(() => {
          dataFromParent.navigateTo('landing');
        }, 1000)
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "pass", message: errors.wrongPass });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error"> {errorMessages.message}</div>
    );


    function handleInputChange(event) {
      const input = event.target
  
      const nameTerms = nameForm.current.value.match(/^\S+@\S+\.\S+$/)
  
      if (nameTerms) {
        input.className = "valid-form"
      } else {
        renderErrorMessage('pass')
        input.className = ''
      }
    }

  
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit} noValidate>
          <h1 className="title-page">Personalinloggning</h1>
          <div className="input-container">
            <input ref={nameForm} onChange={(event) => { handleInputChange(event) }} type="email" name="uname" required placeholder="Användernamn" className="inlogg-input" />
          </div>
          <div className="input-container2">
            <input className="inlogg-input" type="password" name="pass" required placeholder="Lösenord" />
            {renderErrorMessage("pass")}
          </div>
          <button type="submit"> Logga in </button>
        </form>
      </div>
    );



  return (
    <div className="app">
      <div className="app-login">
        {isSubmitted ? (
          <div className="login-success">
            <p>Du är nu inloggad</p>
          </div>
        ) 
        
        : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default Inloggning;*/


const Inloggning = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "mums",
      password: "mums",
    },
  ];

  const errors = {
    wrongName: "ogiltigt användarnamn",
    wrongPass: "ogiltigt lösenord",
    emptyField: "Fältet är tomt",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    const validUname = uname.value.trim() !== "";
    const validPass = pass.value.trim() !== "";

    if (!validUname && !validPass) {
      setErrorMessages({
        name: "uname",
        message: errors.emptyField,
      });
    } else if (!validUname || !validPass) {
      setErrorMessages({
        name: !validUname ? "wrongName" : "pass",
        message: !validUname ? errors.wrongName : errors.wrongPass,
      });
    } else {
      const userData = database.find((user) => user.username === uname.value);

      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.wrongPass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "wrongName", message: errors.wrongName });
      }
    }
  };

  const renderErrorMessage = (name) =>
  name === errorMessages?.name && (
    <div className="error">{errorMessages.message}</div>
  );

const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          name="uname"
          placeholder="Användernamn"
          onBlur={() => setErrorMessages({})}
        />
        {renderErrorMessage("uname")}
        {renderErrorMessage("wrongName")}
      </div>
      <div className="input-container2">
        <input
          className="input-name"
          type="password"
          name="pass"
          placeholder="Lösenord"
          onBlur={() => setErrorMessages({})}
        />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <button type="submit">Logga in</button>
      </div>
    </form>
  </div>
);


  return (
    <div className="app">
      <div>{isSubmitted ? <div>User is successfully logged in</div> : renderForm}</div>
    </div>
  );
};

export default Inloggning


