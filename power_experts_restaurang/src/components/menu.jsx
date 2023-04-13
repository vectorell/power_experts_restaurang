import { useState, useContext } from "react";
import { ContextProvider } from "../App";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import foodItems from "../assets/foodItems";



function Menu({ isLoggedIn }) {
  const [editingItemId, setEditingItemId] = useState(null);
  const { selectedFoodItems, setSelectedFoodItems } = useContext(ContextProvider);
  const dataFromParent = useContext(ContextProvider);

  // Hämta maträtter från localStorage om det finns lagrade maträtter
  const storedFoodItems = JSON.parse(localStorage.getItem("foodItems"));
  const items = storedFoodItems || foodItems;
  

  function handleClick(foodItem) {
    const selectedFoodItem = items.find((item) => item.id === foodItem.id);
    setSelectedFoodItems([...selectedFoodItems, selectedFoodItem]);
    setSelectedDishes([...selectedDishes, selectedFoodItem]);
  }

  const handleSave = (foodItem) => {
    setEditingItemId(null);
    const index = items.findIndex((item) => item.id === foodItem.id);
    const updatedItems = [...items];
    updatedItems[index] = foodItem;
    dataFromParent.setItems(updatedItems);
  
    localStorage.setItem("foodItems", JSON.stringify(updatedItems));
  };

  const deleteDish = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    dataFromParent.setItems(updatedItems);
    localStorage.setItem("foodItems", JSON.stringify(updatedItems));
    console.log('click')
  };

  isLoggedIn = true

  return (
    <div className="menu-container">
      <img
        src="../src/components/menu-img/logo.png"
        alt="loggo"
        className="logo"
        onClick={() => {
          dataFromParent.setShowLandingPage(true);
          dataFromParent.setShowMenu(false);
          dataFromParent.setShowVarukorg(false);
        }}
      />
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
                defaultValue={foodItem.name}
                onChange={(e) => {
                  foodItem.name = e.target.value;
                }}
              />
              <label className="input-label" htmlFor="foodPrice">Pris</label>
              <input className="dish-input"
                type="number"
                label="Pris"
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
                    onClick={() => setEditingItemId(foodItem.id)}title="Redigera rätt" 
                  />
                )}
                {!isLoggedIn && (
                  <button
                    className="menu-btn"
                    onClick={() => handleClick(foodItem)}
                  >
                    Lägg till
                  </button>
                )}
                {isLoggedIn && (
                  <FontAwesomeIcon icon={faTrash} className="staff-icons" onClick={() => deleteDish(foodItem.id)} title="Radera rätt"/>
                )}
              </div>
            </>
          )}
        </div>
      ))}
      <button
        onClick={() => {
          dataFromParent.setShowMenu(false);
          dataFromParent.setShowVarukorg(true);
        }}
        className="btn-forward"
      >
        Till varukorgen
      </button>
    </div>
  );
  
}

export default Menu;