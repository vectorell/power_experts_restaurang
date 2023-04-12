import { useContext } from "react";
import { ContextProvider } from "../App";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
// import HamburgerOverlay from "./HamburgerOverlay";


const SmallScreenHeader =() => {
	const dataFromParent = useContext(ContextProvider)

	const [hamburgerOpen, setHamburgerOpen] = useState(true)
  
   
	// gå till varukorg
	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(true)
	}

	// öppna hamburgare
	const onClickToggleMainMenu =() =>{
		console.log('jag klickade på hamburgaren');
		setHamburgerOpen(!hamburgerOpen)
	}

	// gå till landingpage
	const onClickHome = () => {
		console.log('jag vill hem!');
		dataFromParent.setShowLandingPage(true)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(false)
	}

	// gå till menyn
	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowMenu(true)
	}
	// gå till personal login
	const onClickLogin = () => {
		console.log('personal login');
	}

	return(
		<div>
			<div className="header-mobile">
				<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome}className="header-logo" tabIndex={0}/>
				
				<FontAwesomeIcon icon = {faShoppingBasket} className='cart cart-mobile fa-lg' onClick={onClickCart} aria-label='Varukorg' tabIndex={0}/>

				<FontAwesomeIcon icon = {faBars} className='bars fa-lg' onClick={onClickToggleMainMenu} aria-label='Öppna menyval' tabIndex={0}/>
			</div>

			<nav className = {hamburgerOpen ? 'hamburger-overlay' : 'hamburger-overlay-open' }>
				<FontAwesomeIcon icon = {faClose} className=" faXmark fa-lg" onClick = {onClickToggleMainMenu} aria-label='Stäng menyval' tabIndex={0}/>
			<ul className="hamburger-main-menu">
				<li onClick ={onClickMenu} className='link' tabIndex={0}> Till menyn</li>
				<li onClick={onClickLogin} className="link" tabIndex={0}>Personal</li>	
					<li className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon "/>
					<p tabIndex={0}>0700-202020</p>
					</li>
			</ul>
			</nav>
</div>
	)
}

export default SmallScreenHeader