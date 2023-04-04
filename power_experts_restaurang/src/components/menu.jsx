function Menu({image, name, description, price}) {
	return (
		<div className="main-menu">
			<img src={image} alt={name} />
			<h2 className="name-of-food">{name}</h2>
			<p className="ingredients">{description}</p>
			<p>{price}</p>
		</div>
	)
}


const MenuItems = () => {
	const menuItems = [
		{ id: 1, image: 'menu-img/pasta-carbonara.jpg', name: 'Pasta Carbonara', price: '149:-'}
		{ id: 3, image: 'menu-img/pasta-carbonara.jpg', name: 'Pasta Carbonara', price: '149:-'}
		{ id: 1, image: 'menu-img/pasta-carbonara.jpg', name: 'Pasta Carbonara', price: '149:-'}
	]

}
