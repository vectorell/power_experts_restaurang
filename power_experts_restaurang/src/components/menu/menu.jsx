function Menu({image, name, description, price}) {
	return (
		<div className="main-menu">
			<img src={image} alt={name} className="food-img" />
			<h2 className="name-of-food">{name}</h2>
			<p className="ingredients">{description}</p>
			<p>{price}</p>
		</div>
	)
}


const MenuItems = () => {
	const menuItems = [
		{ id: 1, image: '../src/components/menu-img/carbonara.jpg', name: 'Pasta Carbonara', price: '179:-'},
		{ id: 2, image: 'menu-img/kycklingpasta.jpg', name: 'Krämig kycklingpasta', price: '179:-'},
		{ id: 3, image: 'menu-img/vegetarisk-pasta.jpg', name: 'Vegetarisk pasta bolognese med blomkål', price: '179:-'},
		{ id: 4, image: 'menu-img/libapizza.jpg', name: 'Libapizza', price: '149:-'},
		{ id: 5, image: 'menu-img/vegpizza.jpg', name: 'Vegetarisk pizza med squash', price: '149:-'},
		{ id: 6, image: 'menu-img/sardellpizza.jpg', name: 'Sardell och burratapizza', price: '149:-'},
		{ id: 7, image: 'menu-img/rödkålssallad.jpg', name: 'Rödkålssallad med fikon', price: '169:-'},
		{ id: 8, image: 'menu-img/pastasallad.jpg', name: 'Pastasallad med kyckling och pesto', price: '169:-'},
		{ id: 9, image: 'menu-img/rldbetssallad.jpg', name: 'Rödbetssallad med feta och pistage', price: '169:-'},
	]

	return (
		<div>
			{menuItems.map(menuItem => (
				<Menu
					key={menuItem.id}
					image={menuItem.image}
					name={menuItem.name}
					description={menuItem.description}
					price={menuItem.price}
				/>
			))}
		</div>
	);
}

export default MenuItems