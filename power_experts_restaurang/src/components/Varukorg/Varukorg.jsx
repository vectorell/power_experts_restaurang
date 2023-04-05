import { useState } from "react"
import Dish from "./Dish.jsx"


function Varukorg() {

    // TO DO: Koppla ihop med valda maträtter från menyn
    // Just nu är det bara exempelrätter för testning av komponenten.
    const [dishes, setDishes] = useState([
        {name: 'Tortellini', description: 'Ptjao.. en form av pasta', price: 175},
        {name: 'Pasta Alfredo', description: 'En annan form av pasta', price: 165},
    ])

    // Räknar ut prissumman av rätterna
    const totalSum = dishes.reduce((acc, dish) => acc + dish.price, 0)

    // Funktion för att välja bort en rätt
    function handleRemoveDish(index) {
        const newDishes = [...dishes]
        newDishes.splice(index, 1)
        setDishes(newDishes)
    }

    return (
        <div className="container_varukorg">

            {/* Maträtterna som valts */}
            <div className="dishes">
                {
                    dishes.length === 0 ? <p className="empty-cart"> Kundvagnen är tom. </p>
                    : (
                dishes.map((dish, index) => (
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