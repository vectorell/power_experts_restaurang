import { useContext } from "react";
import { ContextProvider } from "../App";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HamburgerOverlay from "./HamburgerOverlay";


const SmallScreenHeader =() => {
	const dataFromParent = useContext(ContextProvider)

	const [hamburgerOverlayOpen, setHamburgerOverlayOpen] = useState(false)
   
   const toggleHamburgerOverlay = ()=> {
	   setHamburgerOverlayOpen(!hamburgerOverlayOpen)
   }
   

	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowVarukorg(true)
	}

	const onClickBars =() =>{
		console.log('jag klickade på hamurgaren');
		toggleHamburgerOverlay
	}

	const onClickHome = () => {
		console.log('jag vill hem!');
		dataFromParent.setShowLandingPage(true)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(false)
	}

	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowMenu(true)
	}

const onClickLogin = () => {
	console.log('personal login');
}

	return(
		<div className="header-mobile">
		<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome}className="header-logo" tabIndex={0}/>

		<FontAwesomeIcon icon = {faShoppingBasket} className='cart cart-mobile fa-lg' onClick={onClickCart} aria-label='Varukorg' tabIndex={0}/>

		<FontAwesomeIcon icon = {faBars} className='bars fa-lg' onClick={onClickBars} aria-label='Öppna menyval' tabIndex={0}/>
		<HamburgerOverlay />
	</div>
	)
}

export default SmallScreenHeader