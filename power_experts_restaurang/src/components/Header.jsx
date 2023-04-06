import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
import { useContext } from "react";
import { ContextProvider } from "../App";

const Header = () => {
	const dataFromParent = useContext(ContextProvider)

	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
	}

	const onClickBars =() =>{
		console.log('jag klickade på hamurgare');
	}

	const onClickHome = () => {
		console.log('jag vill hem!');
		dataFromParent.setShowLandingPage(true)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(false)
	}

const onClickMenu = () => {
	console.log('Jag vill se menyn');
}

const onClickLogin = () => {
	console.log('personal login');
}

return(

		<section className='header'>

		<div className="header-mobile">
			<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome}className="header-logo "/>
			<FontAwesomeIcon icon = {faShoppingBasket} className='cart cart-mobile fa-lg' onClick={onClickCart} aria-label='Varukorg'/>
			<FontAwesomeIcon icon = {faBars} className='bars fa-lg' onClick={onClickBars} aria-label='Öppna menyval'/>
		</div>

		<div className='header-desktop'>
		<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome} className="header-logo "/>
			<p onClick ={onClickMenu} className='link'> Till menyn</p>
			<p onClick={onClickLogin} className="link">Personal</p>
				<div className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon "/>
					<p>0700-202020</p>
				</div>
			<FontAwesomeIcon icon = {faShoppingBasket} className='cart cart-desktop link fa-lg' onClick={onClickCart} aria-label='Varukorg'/>

			</div>

		</section>
	)

}

export default Header