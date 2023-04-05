import { useContext, useState } from "react"
import { ContextProvider } from "../App.jsx"
import Dish from "./Dish.jsx"


function Varukorg() {
    const {foodItems} = useContext(ContextProvider) 

    // TO DO: Koppla ihop med valda maträtter från menyn
    // Just nu är det bara exempelrätter för testning av komponenten.
    const [selectedDishes, setSelectedDishes] = useState(foodItems)

    // Räknar ut prissumman av rätterna
    const totalSum = selectedDishes.reduce((acc, dish) => acc + dish.price, 0)

    // Funktion för att välja bort en rätt
    function handleRemoveDish(index) {
        const newSelectedDishes = [...selectedDishes]
        newSelectedDishes.splice(index, 1)
        setSelectedDishes(newSelectedDishes)
    }

    return (
        <div className="container_varukorg">

            {/* Maträtterna som valts */}
            <div className="dishes">
                {
                    selectedDishes.length === 0 ? <p className="empty-cart"> Kundvagnen är tom. </p>
                    : (
                selectedDishes.map((dish, index) => (
                    <Dish 
                        key={index} 
                        name={dish.name} 
                        description={dish.description} 
                        price={dish.price} 
                        onRemove={ () => handleRemoveDish(index)}
                    />
                )))}
            </div>

            {/* Summa + Knapp (gå vidare) */}
            <div>
                <h2 className="total-sum"> Totalsumma: {totalSum}:- </h2>
                <button className="btn-confirm"> Gå vidare </button>
            </div>

        </div>
    )
}

export default Varukorg