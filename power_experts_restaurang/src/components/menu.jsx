import { useState, useContext } from "react";
import { ContextProvider } from "../App";

function Menu({ items }) {
  const { selectedFoodItems, setSelectedFoodItems } = useContext(ContextProvider);
  const dataFromParent = useContext(ContextProvider)
  const { navigateTo } = useContext(ContextProvider)

  const [selectedDishes, setSelectedDishes] = useState(selectedFoodItems);

  function handleClick(foodItem) {
	console.log(selectedFoodItems)
    const selectedFoodItem = items.find((item) => item.id === foodItem.id);
    setSelectedFoodItems([...selectedFoodItems, selectedFoodItem]);
    setSelectedDishes([...selectedDishes, selectedFoodItem]);
  }

  return (
	  <div className="menu-container">
	  <img src="../src/components/menu-img/logo.png" alt="loggo" className="logo" onClick={() => {
				navigateTo('landing')
	  }}/>
      <h1 className="menu-header">Meny</h1>
      {items.map((foodItem) => (
        <div key={foodItem.id} className="dish-container">
          <img src={foodItem.image} alt={foodItem.name} className="food-img" />
          <h2 className="name-of-food">{foodItem.name}</h2>
          <p className="price">{foodItem.price}:-</p>
          {foodItem.description ? (
            <p className="ingredients">
              <span className="innehåll">Innehåll:</span> {foodItem.description}
            </p>
          ) : null}
          <button className="menu-btn" onClick={() => handleClick(foodItem)}>
            Lägg till
          </button>
        </div>
      ))}
	  <button onClick={ () => { navigateTo('varukorg') }} className="btn-forward"> 
      Till varukorgen 
    </button>
    </div>
  );
}

export default Menu;