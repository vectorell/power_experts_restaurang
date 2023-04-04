import Dish from "./Dish"

function Varukorg() {

    return (
        <div className="container_varukorg">
            <Dish name={'Tortellini'} description={'Ptjao.. en form av pasta'} price={ '175:-' }/>
            <Dish name={'Köttbullar'} description={'skitgoda'} price={'12kr st'}/>
        </div>
    )
}

export default Varukorg