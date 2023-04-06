import { useContext, useState } from "react"
import { ContextProvider } from "../App"
import Dish from "./Dish"
import { useEffect } from "react"

function Varukorg() {
    const {selectedFoodItems} = useContext(ContextProvider) 
    const {setSelectedFoodItems} = useContext(ContextProvider)
    const dataFromParent = useContext(ContextProvider)
    // TO DO: Koppla ihop med valda maträtter från menyn
    // Just nu är det bara exempelrätter för testning av komponenten.
    const [selectedDishes, setSelectedDishes] = useState(selectedFoodItems)

    useEffect(() => {
        setSelectedDishes(selectedFoodItems);
      }, [selectedFoodItems]);
    

    
    // Räknar ut prissumman av rätterna
    const totalSum = selectedDishes.reduce((acc, dish) => acc + dish.price, 0)

    // Funktion för att välja bort en rätt
    function handleRemoveDish(index) {
        const newSelectedDishes = [...selectedFoodItems]
        newSelectedDishes.splice(index, 1)
        setSelectedFoodItems(newSelectedDishes)
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
                <div className="button-div">

                    <button className="btn-confirm" onClick={() => {
                        dataFromParent.setShowVarukorg(false)
                        dataFromParent.setShowMenu(true)
                    }}> Tillbaka till menyn </button>
                    <button className="btn-confirm"onClick={() => {

                        // Ställ in vilken vy som ska visas här!
                        // exempel: 
                        // dataFromParent.setShowOrderConfirmation

                    }}> Gå vidare </button>
                </div>
            </div>

        </div>
    )
}

export default Varukorg


