import { useContext } from "react";
import { ContextProvider } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const LargeScreenHeader = () => {
	const { navigateTo } = useContext(ContextProvider)

	// gå till varukorg
	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
		navigateTo('varukorg')
	}

	// gå till landingpage
	const onClickHome = () => {
		console.log('jag vill hem!');
		navigateTo('landing')
	}

	// gå till menyn
	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		navigateTo('landing')
	}

	// gå till personal login
	const onClickLogin = () => {
		console.log('personal login');
	}


	return(
	<div className='header-desktop'>
		<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome} className="header-logo" tabIndex={0}/>
		<ul className="main-menu  desktop-main-menu" >
			<li onClick ={onClickMenu} className='link' tabIndex={0}> Till menyn</li>
			<li onClick={onClickLogin} className="link" tabIndex={0}>Personal</li>
				<li className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon"/>
					<p tabIndex={0}>0700-202020</p>
				</li>
			</ul>		
			<FontAwesomeIcon icon = {faShoppingBasket} className='cart cart-desktop link fa-lg' onClick={onClickCart} aria-label='Varukorg' />

			</div>
	)		
}


export default LargeScreenHeader