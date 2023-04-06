import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const Header = () => {

const OnClickCart =() =>{
	console.log('jag klickade på varukorg');
}

const OnClickBars =() =>{
	console.log('jag klickade på hamurgare');
}

const onClickHome = () => {
	console.log('jag vill hem!');
}

return(

	<section className='header'>

		<div className="header-mobile">
			<img src="src\components\images\logo-no-background 1.svg" alt="Företagslogga Feast & Fare" onClick={onClickHome}/>
			<FontAwesomeIcon icon = {faShoppingBasket } className='bars fa-lg'/>
			<FontAwesomeIcon icon = {faCartShopping} className='cart fa-lg' onClick={OnClickCart}/>
			<FontAwesomeIcon icon = {faBars} className='bars fa-lg' onClick={OnClickBars}/>
		</div>
		<div className='header-desktop'>
		<img src="src\components\images\logo-no-background 1.svg" alt="Företagslogga Feast & Fare" onClick={onClickHome} className="logo-desktop"/>
			<p> Till menyn</p>
			<p>Personal</p>
				<div className="phone">
					<FontAwesomeIcon icon = {faPhone}/>
					<p>0700-202020</p>
				</div>
			</div>
	</section>
)

}

export default Header