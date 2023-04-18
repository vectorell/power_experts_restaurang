import './AddNewDish.css'
import { useContext, useState, useRef } from 'react'
import { ContextProvider } from '../../App'
import newDishImg from "../menu-img/talian-cuisine-abstract-concept-illustration-mediterranean-cuisine-italian-re_335657-3522.jpg"

function AddNewDish() {
    // Inhämtning context
    const dataFromParent = useContext(ContextProvider)
    const {navigateTo} = useContext(ContextProvider)
    
    // Namn/pris/innehåll för nya maträtts-objektet ( newDishObj )
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [contents, setContents] = useState('')

    // Inputfälten
    const inputNameRef = useRef(null)       // Namn på maträtt
    const inputPriceRef = useRef(null)      // Pris
    const inputContentsRef = useRef(null)   // Innehåll

    // <p>-taggarna för felmeddelandena
    const paraNameRef = useRef(null)        // Namn på maträtt
    const paraPriceRef = useRef(null)       // Pris
    const paraContentsRef = useRef(null)    // Innehåll

    const addedPara = useRef(null)

    const errorMessageObj = {
        name: 'Var god fyll i maträttens namn, minst tre bokstäver.',
        price: 'Var god fyll i maträttens pris, med endast siffror',
        description: 'Var god fyll i maträttens innehåll, minst tre bokstäver.',
    }

    
    function handleSave(event) {
        event.preventDefault()   

        // Valideringscheck på namn
        inputNameRef.current.value.length > 2 && (inputNameRef.current.value.match( /^[A-Ö a-ö\z]+$/ ))
        ? ( inputNameRef.current.className='valid', paraNameRef.current.style.visibility = 'hidden')
        : (inputNameRef.current.className='invalid', paraNameRef.current.style.visibility = 'visible')
        
        // Valideringscheck på pris
        inputPriceRef.current.value > 0 && (inputPriceRef.current.value.match( /^[0-9]+$/ ))
        ? (inputPriceRef.current.className='valid', paraPriceRef.current.style.visibility = 'hidden')
        : (inputPriceRef.current.className='invalid', paraPriceRef.current.style.visibility = 'visible')

        // Valideringscheck på innehåll i maträtten
        inputContentsRef.current.value.length > 2 && (inputContentsRef.current.value.match( /^[A-Ö, a-ö\z]+$/ ))
        ? (inputContentsRef.current.className='valid', paraContentsRef.current.style.visibility = 'hidden')
        : (inputContentsRef.current.className='invalid', paraContentsRef.current.style.visibility = 'visible')

        // Om alla inputfält är godkända...
        if ((inputNameRef.current.className=='valid') && (inputPriceRef.current.className=='valid') && (inputContentsRef.current.className=='valid')) {

            let newDishObj = {
                id: Math.random().toString(),
                image: newDishImg,
                name: name,
                price: Number(price),
                description: contents,
            }

            let updatedFoodItems = [...dataFromParent.items]
            updatedFoodItems.push(newDishObj)
            dataFromParent.setItems(updatedFoodItems)
            localStorage.setItem("foodItems", JSON.stringify(updatedFoodItems));

            // Töm inputfälten och nollställ matobjektet
            inputNameRef.current.value = ''
            inputPriceRef.current.value = ''
            inputContentsRef.current.value = ''
            setName('')
            setPrice('')
            setContents('')

            addedPara.current.style.visibility = 'visible'
            setTimeout(() => {
                addedPara.current.style.visibility = 'hidden'
            }, 2500)
        } 
    }
    
    function handleInputChange(event) {
        const input = event.target
        const errorMessage = input.nextElementSibling

        // Villkor för namnvalidering
        const nameInputTerms = inputNameRef.current.value.length > 2 && inputNameRef.current.value.match( /^[A-Ö a-ö\z]+$/ )

        // Villkor för prisvalidering
        const priceInputTerms = inputPriceRef.current.value > 0 && inputPriceRef.current.value.match( /^[0-9]+$/ )

        // Villkor för innehållsvalidering
        const contentsInputTerms = inputContentsRef.current.value.length > 2 && inputContentsRef.current.value.match( /^[A-Ö, a-ö\z]+$/ )

        if (nameInputTerms || priceInputTerms || contentsInputTerms) {
            input.classList.remove('invalid')
            input.classList.add('valid')
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid')
        }

        if (errorMessage.classList.contains('error-message')) {
            errorMessage.style.visibility = 'hidden'
        }
    }
        



    return (

        <form className="add-dish-form">
            <h1 className="title"> Lägg till ny maträtt </h1>

            {/* INPUTFÄLT FÖR BILD */}
            <h2 className="title-input"> Bild </h2>
            <input className='input-picture' type="text" placeholder='talian-cuisine-abstract-concept-illustration-mediterranean-cuisine-italian-re_335657-3522.jpg'/>

            {/* INPUTFÄLT FÖR NAMN PÅ MATRÄTT */}
            <h2 className="title-input"> Namn på maträtt </h2>
            <input className="input-name" ref={inputNameRef} type="text" required 
            onChange={(event) => { 
                setName(event.target.value) 
                handleInputChange(event)
                }} />
            <p className="error-message" ref={paraNameRef} style={{visibility: "hidden"}}> {errorMessageObj.name} </p>


            {/* INPUTFÄLT FÖR PRIS */}
            <h2 className="title-input"> Pris </h2>
            <input className="input-price" ref={inputPriceRef} type="text" required pattern="[0-9]"
            onChange={(event) => {
                setPrice(event.target.value)
                handleInputChange(event)
                }} />
            <p className="error-message" ref={paraPriceRef} style={{visibility: "hidden"}}> {errorMessageObj.price} </p>

            {/* INPUTFÄLT FÖR INNEHÅLL */}
            <h2 className="title-input"> Innehåll </h2>
            <input className="input-contents" ref={inputContentsRef} type="text" required
            onChange={(event) => { 
                setContents(event.target.value) 
                handleInputChange(event)
                }} />
            <p className="error-message" ref={paraContentsRef} style={{visibility: "hidden"}}> {errorMessageObj.description} </p>

            {/* KNAPP-CONTAINER */}
                <div className="button-div">
                    <p className="added-dish-para" ref={addedPara} style={{visibility: "hidden"}}> Maträtt tillagd </p>
                    <button className="submit-btn" type="submit" onClick={() => navigateTo('menu')}> Till menyn </button>
                    <button className="submit-btn" type="submit" onClick={handleSave}> Lägg till rätt </button>
                </div>
        </form>

    )
}



export default AddNewDish