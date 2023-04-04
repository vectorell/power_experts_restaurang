

function Dish({ name, description, price, img }) {
    return (
        <div className="varukorg-dish">
            <img></img>
            <h2> {name} </h2>
            <p> {description} </p>
            <p> {price} </p>
        </div>
    )
}

export default Dish