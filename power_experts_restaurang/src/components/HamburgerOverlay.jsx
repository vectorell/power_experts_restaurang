/* import { useContext, useState } from "react";
import { ContextProvider } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './hamburgerOverlay.css'


const HamburgerOverlay = () => {

	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowMenu(true)
		dataFromParent.setShowVarukorg(false)
		dataFromParent.setShowHamburgerOverlay(false)
	}

	const onClickLogin = () => {
		console.log('personal login');
	}

	return(
		<nav  className = {hamburgerOpen ? 'hamburger-overlay' : 'hamburger-overlay-open' }>
			<ul className="hamburger-main-menu">
				<li onClick ={onClickMenu} className='link' tabIndex={0}> Till menyn</li>
				<li onClick={onClickLogin} className="link" tabIndex={0}>Personal</li>	
					<li className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon "/>
					<p tabIndex={0}>0700-202020</p>
					</li>
			</ul>
		</nav>

	)
}


export default HamburgerOverlay */