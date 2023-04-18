import './Varukorg.css'
import { ContextProvider } from '../../App'
import { useContext } from 'react'

function Dish({ name, description, price, onRemove }) {

    return (
        <div className="varukorg-dish">
            <h2 className="dish-name"> {name} </h2>
            <p className="dish-description"> {description} </p>
            <p className="dish-price"> {price}:- </p>
            <img className="close-icon" src="./src/assets/close.png" onClick={onRemove} onKeyDown={onRemove} tabIndex={0}/>
        </div>
    )
}

export default Dish