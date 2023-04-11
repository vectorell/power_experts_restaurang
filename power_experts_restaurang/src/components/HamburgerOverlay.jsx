import { useContext } from "react";
import { ContextProvider } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './hamburgerOverlay.css'


const HamburgerOverlay = () => {
	const dataFromParent = useContext(ContextProvider)
 
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
		<section className = 'hamburger-overlay'>
			
				<p onClick ={onClickMenu} className='link'> Till menyn</p>
				<p onClick={onClickLogin} className="link">Personal</p>	
					<div className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon "/>
					<p>0700-202020</p>
					</div>
				
		</section>

	)
}


export default HamburgerOverlay