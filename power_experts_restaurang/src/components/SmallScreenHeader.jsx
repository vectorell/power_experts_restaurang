import { useContext } from "react";
import { ContextProvider } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const SmallScreenHeader =() => {
	const dataFromParent = useContext(ContextProvider)

	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowVarukorg(true)
		dataFromParent.setShowHamburgerOverlay(false)
	}

	const onClickBars =() =>{
		console.log('jag klickade på hamurgaren');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowHamburgerOverlay(true)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(false)
	}

	const onClickHome = () => {
		console.log('jag vill hem!');
		dataFromParent.setShowLandingPage(true)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(false)
		dataFromParent.setShowHamburgerOverlay(false)
	}

	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowMenu(true)
		dataFromParent.setShowHamburgerOverlay(false)
	}

const onClickLogin = () => {
	console.log('personal login');
}

	return(
		<div className="header-mobile">
		<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome}className="header-logo "/>
		<FontAwesomeIcon icon = {faShoppingBasket} className='cart cart-mobile fa-lg' onClick={onClickCart} aria-label='Varukorg'/>
		<FontAwesomeIcon icon = {faBars} className='bars fa-lg' onClick={onClickBars} aria-label='Öppna menyval'/>
	</div>
	)
}

export default SmallScreenHeader