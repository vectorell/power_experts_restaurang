import './AddNewDish.css'
import { useContext, useState, useRef } from 'react'
import foodItems from '../assets/foodItems'
import { ContextProvider } from '../App'

function AddNewDish() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [contents, setContents] = useState('')
    // console.log(foodItems)
    const dataFromParent = useContext(ContextProvider)
    const {navigateTo} = useContext(ContextProvider)

    const inputNameRef = useRef(null)
    const inputPriceRef = useRef(null)
    const inputContentsRef = useRef(null)

    const paraNameRef = useRef(null)
    const paraPriceRef = useRef(null)
    const paraContentsRef = useRef(null)

    
    const errorMessageObj = {
        name: 'Var god fyll i maträttens namn, minst tre bokstäver.',
        price: 'Var god fyll i maträttens pris, med endast siffror',
        description: 'Var god fyll i maträttens innehåll, minst tre bokstäver.',
        empty: ''
    }


    
    function handleSave(event) {
        event.preventDefault()

        if (inputNameRef.current.value.length > 2 && (inputNameRef.current.value.match( /^[A-Ö a-ö\z]+$/ ))) {
            inputNameRef.current.className='valid'
            paraNameRef.current.style.visibility = 'hidden'
        } else {
            inputNameRef.current.className='invalid'
            paraNameRef.current.style.visibility = 'visible'
        }

        if (inputPriceRef.current.value > 0 && (inputPriceRef.current.value.match( /^[0-9]+$/ ))) {
            inputPriceRef.current.className='valid'
            paraPriceRef.current.style.visibility = 'hidden'
        } else {
            inputPriceRef.current.className='invalid'
            paraPriceRef.current.style.visibility = 'visible'
        }

        if (inputContentsRef.current.value.length > 2 && (inputContentsRef.current.value.match( /^[A-Ö, a-ö\z]+$/ ))) {
            inputContentsRef.current.className='valid'
            paraContentsRef.current.style.visibility = 'hidden'
        } else {
            inputContentsRef.current.className='invalid'
            paraContentsRef.current.style.visibility = 'visible'
        }


        if ((name !== '') && (price !== '') && (contents !== '')) {

            let newDishObj = {
                id: '',
                image: '../src/components/menu-img/talian-cuisine-abstract-concept-illustration-mediterranean-cuisine-italian-re_335657-3522.avif',
                name: name,
                price: Number(price),
                description: contents,
            }

            let updatedFoodItems = [...dataFromParent.foodItemsArray]
            updatedFoodItems.push(newDishObj)
            dataFromParent.setFoodItemsArray(updatedFoodItems)
            console.log('dataFromParent.foodItemsArray')
            console.log(dataFromParent.foodItemsArray)


            inputNameRef.current.value = ''
            inputPriceRef.current.value = ''
            inputContentsRef.current.value = ''
        } 
    }

    function handleInputChange(event) {
        const input = event.target
        input.classList.remove('invalid')
        // input.classList.add('valid')
        const errorMessage = input.nextElementSibling
        if (errorMessage.classList.contains('error-message')) {
            errorMessage.style.visibility = 'hidden'
        }
    }
        



    return (

        <form className="add-dish-form">
            <h1 className="title"> Lägg till ny maträtt </h1>

            <h2 className="title-input"> Bild </h2>
            <input className='input-picture' type="text" placeholder='talian-cuisine-abstract-concept-illustration-mediterranean-cuisine-italian-re_335657-3522.avif'/>

            <h2 className="title-input"> Namn på maträtt </h2>
            <input className="input-name" ref={inputNameRef} type="text" required 
            onChange={(event) => { 
                setName(event.target.value) 
                handleInputChange(event)
                }} />
            <p className="error-message" ref={paraNameRef} style={{visibility: "hidden"}}> {errorMessageObj.name} </p>

            <h2 className="title-input"> Pris </h2>
            <input className="input-price" ref={inputPriceRef} type="text" required pattern="[0-9]"
            onChange={(event) => {
                setPrice(event.target.value)
                handleInputChange(event)
                }} />
            <p className="error-message" ref={paraPriceRef} style={{visibility: "hidden"}}> {errorMessageObj.price} </p>

            <h2 className="title-input"> Innehåll </h2>
            <input className="input-contents" ref={inputContentsRef} type="text" required
            onChange={(event) => { 
                setContents(event.target.value) 
                handleInputChange(event)
                }} />
            <p className="error-message" ref={paraContentsRef} style={{visibility: "hidden"}}> {errorMessageObj.description} </p>
                <div className="button-div">
                    <button className="submit-btn" type="submit" onClick={() => navigateTo('menu')}> Till menyn </button>
                    <button className="submit-btn" type="submit" onClick={handleSave}> Lägg till rätt </button>
                </div>
        </form>

    )
}



export default AddNewDish