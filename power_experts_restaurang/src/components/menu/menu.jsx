import foodItems from "../../assets/foodItems"
import { useContext } from "react"
import { ContextProvider } from "../../App"



function Menu({image, name, description, price}) {
	const {foodItems} = useContext(ContextProvider)
	return (
		<div className="main-menu">
			<img src={foodItems.image} alt={foodItems.name} className="food-img" />
			<h2 className="name-of-food">{foodItems.name}</h2>
			<p className="ingredients">{foodItems.description}</p>
			<p>{foodItems.price}</p>
		</div>
	)
}


return (
	<div>
		{foodItems.map(foodItem => (
			<Menu
				key={foodItem.id}
				image={foodItem.image}
				name={foodItem.name}
				description={foodItem.description}
				price={foodItem.price}
			/>
		))}
	</div>
);
export default Menu