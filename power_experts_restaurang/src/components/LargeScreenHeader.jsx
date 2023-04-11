import { useContext } from "react";
import { ContextProvider } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const LargeScreenHeader = () => {
	const dataFromParent = useContext(ContextProvider)

	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
		dataFromParent.setShowLandingPage(false)
		dataFromParent.setShowMenu(false)
		dataFromParent.setShowVarukorg(true)
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
		dataFromParent.setShowVarukorg(false)
	}

	const onClickLogin = () => {
		console.log('personal login');
	}


	return(
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
	)		
}


export default LargeScreenHeader