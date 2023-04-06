import { useState } from "react"


export function HeaderPage () {
    return(
        <h1 className="title"> PersonalInloggning </h1>
    );
}

const Inloggning = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "power",
      password: "mums"
    }
  ];

  const errors = {
    wrongName: "ogiltigt användarnamn",
    wrongPass: "ogiltigt lösenord"
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
      }
    } else {
      // Username not found
      setErrorMessages({ name: "wrongName", message: errors.wrongName });
    }
  };
  

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="uname" required placeholder="Användernamn" />
          {renderErrorMessage("wrongName")}
        </div>
        <div className="input-container">
          <input type="password" name="pass" required placeholder="Lösenord" />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit" > Logga in </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div >
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default Inloggning;


