import './Varukorg.css'

function Dish({ name, description, price, imgSource }) {
    return (
        <div className="varukorg-dish">
            <img className="image-dish-small" src={imgSource}/>
            <div className="varukorg-dish-info">
                <h2> {name} </h2>
                <p> {description} </p>
                <p> {price}:- </p>
            </div>
            <img className="close-icon" src="./src/assets/close.png"/>
        </div>
    )
}

export default Dish