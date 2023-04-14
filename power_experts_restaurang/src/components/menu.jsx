import { useState, useContext } from "react";
import { ContextProvider } from "../App";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import foodItems from "../assets/foodItems";


// export function onClickCart() {
//   console.log('klick')
//   }
function Menu({ isLoggedIn }) {
  const [editingItemId, setEditingItemId] = useState(null);
  const { selectedFoodItems, setSelectedFoodItems } = useContext(ContextProvider);
  const dataFromParent = useContext(ContextProvider)
  const { navigateTo } = useContext(ContextProvider)
  const {items} = useContext(ContextProvider)

  const [selectedDishes, setSelectedDishes] = useState(selectedFoodItems);

  // // Hämta maträtter från localStorage om det finns lagrade maträtter
  // const storedFoodItems = JSON.parse(localStorage.getItem("foodItems"));
  // const items = storedFoodItems || foodItems;

  function handleClick(foodItem) {
    const selectedFoodItem = items.find((item) => item.id === foodItem.id);
    setSelectedFoodItems([...selectedFoodItems, selectedFoodItem]);
    setSelectedDishes([...selectedDishes, selectedFoodItem]);
  
    // Sätt in texten i rätt kort
    const parentCard = event.target.parentNode.parentNode;
    const addedText = parentCard.querySelector(".added-text");
    addedText.style.visibility = "visible";
  
    // Dölj texten efter 2 sekunder
    setTimeout(() => {
      addedText.style.visibility = "hidden";
    }, 2000);
  }

  const handleSave = (foodItem) => {
    setEditingItemId(null);
    const index = items.findIndex((item) => item.id === foodItem.id);
    const updatedItems = [...items];
    updatedItems[index] = foodItem;

    localStorage.setItem("foodItems", JSON.stringify(updatedItems));

  };

  const deleteDish = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    dataFromParent.setItems(updatedItems);
    localStorage.setItem("foodItems", JSON.stringify(updatedItems));
    console.log('click')
  };


  //true = staff-sidan, false =
  isLoggedIn = true

  return (
	  <div className="menu-container">
	  <img src="../src/components/menu-img/logo.png" alt="loggo" className="logo" onClick={() => {
				navigateTo('landing')
	  }}/>
      <h1 className="menu-header">Meny</h1>
      {items.map((foodItem) => (
        <div key={foodItem.id} className="dish-container">
          <img src={foodItem.image} alt={foodItem.name} className="food-img" />

          {editingItemId === foodItem.id ? (
            // rendera input-fält för att redigera maträtten
            <>
              <label className="input-label" htmlFor="foodName">Namn på rätt</label>
              <input className="dish-input"
                type="text"
                required
                pattern="[A-Za-zÅÄÖåäö\s]+"
                defaultValue={foodItem.name}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (inputValue.match(/^[A-ZÅÄÖa-zåäö\s]+$/)) {
                    foodItem.name = inputValue;
                  }
                }}
                onKeyDown={(e) => {
                  if (!/^[a-zåäöA-ZÅÄÖ\s]*$/g.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <label className="input-label" htmlFor="foodPrice">Pris</label>
              <input className="dish-input"
                type="number"
                required
                label="Pris"
                pattern="[0-9]"
                defaultValue={foodItem.price}
                onChange={(e) => {
                  foodItem.price = Number(e.target.value);
                }}
              />
              <label className="input-label" htmlFor="foodDescription">Innehåll</label>
              <textarea className="dish-textarea"
                defaultValue={foodItem.description}
                onChange={(e) => {
                  foodItem.description = e.target.value;
                }}
              />
              <FontAwesomeIcon
                icon={faCheck}
                className="staff-icons"
                onClick={() => handleSave(foodItem)}
                type="submit"
                title="Spara ändringar"
              />
            </>
          ) : (
            // rendera maträtten
            <>
              <h2 className="name-of-food">{foodItem.name}</h2>
              <p className="price">{foodItem.price}:-</p>
              {foodItem.description ? (
                <p className="ingredients">
                  <span className="innehåll">Innehåll:</span>{" "}
                  {foodItem.description}
                </p>
              ) : null}
              <div className="btn-div">
                {isLoggedIn && (
                  <FontAwesomeIcon
                    icon={faPen}
                    className="staff-icons"
                    onClick={() => setEditingItemId(foodItem.id)} title="Redigera rätt"
                  />
                )}
                {!isLoggedIn && (
                  <div>
                    <button
                      className="menu-btn"
                      onClick={() => handleClick(foodItem)}
                    >
                      Lägg till
                    </button>
                    <p className="added-text">Tillagd i kundkorg!</p>
                  </div>
                )}
                {isLoggedIn && (
                  <FontAwesomeIcon icon={faTrash} className="staff-icons" onClick={() => deleteDish(foodItem.id)} title="Radera rätt" />
                )}
              </div>
            </>
          )}
        </div>
      ))}
    <button className="add-dish" onClick={() => {navigateTo('newDish')}}> Lägg till en ny maträtt </button>
	  <button onClick={ () => { navigateTo('varukorg') }} className="btn-forward"> 
      Till varukorgen 
    </button>
    </div>
  );

}



export default Menu;