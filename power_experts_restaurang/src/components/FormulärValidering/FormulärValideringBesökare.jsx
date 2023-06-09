import { useState } from "react";

const FirstNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameIsWrong, setFirstNameIsWrong] = useState(false);


  const [firstNameIsValid , nameErrorMessage] = isValidFirstName(firstName);

  function isValidFirstName(totalName) {
    if (totalName.length < 2) {
      return false 
    }
    if (totalName.includes(" ")) {
      return false 
    }

    let allowedAlphabet = " abcdefghijklmnopqrstuvwxyzåäö";
    for (let i = 0; i < totalName.length; i++) {
      let character = totalName[i].toLowerCase();
      if (!allowedAlphabet.includes(character)) {
        return false
      }
    }
    return true;
  }

  

  return (
    <div className="form-validation">
      <form>
        <div className="name">
          <input
            type="text"
            placeholder="Namn"
            required
            onChange={(event) => {
              setFirstName(event.target.value);
              //setFirstNameIsWrong(true);
            }}
            onBlur ={() => setFirstNameIsWrong(true)}
          />
          <span>
            {" "}
            {firstNameIsWrong ? (firstNameIsValid ? "✔️" : "❌") : ""}
          </span>
        </div>
        <span>{ nameErrorMessage }</span>

        
      </form>
    </div>
  );
};

export const LastNameForm = () => {
  const [lastName, setLastName] = useState("");
  const [lastNameIsWrong, setLastNameIsWrong] = useState(false);

  function isValidLastName(theLastName) {
    if (theLastName.length < 2) {
      return false;
    }
    if (theLastName.includes(" ")) {
      return false;
    }

    let allowedAlphabet = " abcdefghijklmnopqrstuvwxyzåäö";
    for (let i = 0; i < theLastName.length; i++) {
      let character = theLastName[i].toLowerCase();
      if (!allowedAlphabet.includes(character)) {
        return false;
      }
    }
    return true;
  }

  const lastNameIsValid = isValidLastName(lastName);

  return (
    <div>
      <div className="name">
        <input
          type="text"
          placeholder="Efternamn"
          required
          onChange={(event) => {
            setLastName(event.target.value);
            
          }}
          onBlur = {() => setLastNameIsWrong (true)}
        />
        <span>
          {" "}
          {lastNameIsWrong ? (lastNameIsValid ? "✔️" : "❌") : ""}
        </span>
      </div>
      <div className="name">
          <input type="tel"  placeholder="Frivillig"/>
          
        </div>
        <div className="name">
          <button id="button-submit"  type="submit">
            Gå till betalning
          </button>
        </div>
    </div>
  );
};



export default FirstNameForm;
