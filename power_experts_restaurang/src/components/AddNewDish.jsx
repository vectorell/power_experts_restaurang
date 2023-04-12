import './AddNewDish.css'
import { useContext, useState } from 'react'
import foodItems from '../assets/foodItems'
import { ContextProvider } from '../App'

function AddNewDish() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [contents, setContents] = useState('')
    // console.log(foodItems)
    const dataFromParent = useContext(ContextProvider)
    
    function handleSave(event) {
        event.preventDefault()
        let newDishObj = {
            description: contents,
            id: '',
            image: '',
            name: name,
            price: Number(price),
        }

        let updatedFoodItems = [...dataFromParent.foodItemsArray]
        updatedFoodItems.push(newDishObj)
        dataFromParent.setFoodItemsArray(updatedFoodItems)


        console.log('dataFromParent.foodItemsArray')
        console.log(dataFromParent.foodItemsArray)
        }
        



    return (

        <form className="add-dish-form">
            <h1 className="title"> Lägg till ny maträtt </h1>

            <h2 className="title-input"> Bild </h2>
            <input className='input-picture' type="text"/>

            <h2 className="title-input"> Namn </h2>
            <input className="input-name" type="text" required 
            onChange={(event) => { setName(event.target.value) }}
            />

            <h2 className="title-input"> Pris </h2>
            <input className="input-price" type="number" required
            onChange={(event) => {setPrice(event.target.value)}}
            />

            <h2 className="title-input"> Innehåll </h2>
            <input className="input-contents" type="text" required
            onChange={(event) => { setContents(event.target.value) }}
            />

            <button className="submit-btn" type="submit" onClick={handleSave}> Lägg till rätt </button>
        </form>

    )
}



export default AddNewDish