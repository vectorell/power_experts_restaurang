import Dish from "./Dish.jsx"


function Varukorg() {

    const dishes = [
        {name: 'Tortellini', description: 'Ptjao.. en form av pasta', price: 175},
        {name: 'Tortellini', description: 'Ptjao.. en form av pasta', price: 175},
        {name: 'Köttbullar', description: 'skitgoda köttbullar', price: 12}
    ]

    const totalSum = dishes.reduce((acc, dish) => acc + dish.price, 0)

    return (
        <div className="container_varukorg">

            {/* Maträtterna som valts */}
            <div className="dishes">
                <Dish name={'Tortellini'} description={'Ptjao.. en form av pasta'} price={175} imgSource={'https://static.mathem.se/shared/images/recipes/doublelarge/kramig-tortellini-med-gronkal-och-rostade-mandlar-foto-nurlan-mathem.jpeg'}/>
                <Dish name={'Tortellini'} description={'Ptjao.. en form av pasta'} price={175} imgSource={'https://static.mathem.se/shared/images/recipes/doublelarge/kramig-tortellini-med-gronkal-och-rostade-mandlar-foto-nurlan-mathem.jpeg'}/>
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