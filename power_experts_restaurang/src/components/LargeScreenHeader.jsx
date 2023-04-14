import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Inloggning from "./PersonalSidan";

const LargeScreenHeader = () => {
	const { navigateTo , selectedFoodItems } = useContext(ContextProvider)
	const [ areItemsInCart , setAreItemsInCart] = useState(false);

	//dyker upp text under korgen och byts färg på korgen när beställs mat
	const TextUnderCartShopping = () => {
		return (<div className="text-under-cart">Beställt</div>
		)
	}
	useEffect(() => {
		if(selectedFoodItems.length > 0){
			console.log('du har beställt');

			setAreItemsInCart(true)
		} else{
			setAreItemsInCart(false);
		}
	} ,[selectedFoodItems])


	// gå till varukorg
	const onClickCart =() =>{
		console.log('jag klickade på varukorg');
		navigateTo('varukorg')
	}
	const onKeyDownCart = () => {
		{event.key === 'Enter' ? navigateTo('varukorg') : null}
	}


	// gå till landingpage
	const onClickHome = () => {
		console.log('jag vill hem!');
		navigateTo('landing')
	}
	const onKeyDownHome = () => {
		{event.key === 'Enter' ? navigateTo('landing') : null}
	}

	// gå till menyn
	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		navigateTo('menu')
	}
	const onKeyDownMenu = () => {
		{event.key === 'Enter' ? navigateTo('menu') : null}
	}

	// gå till personal login
	const onClickLogin = () => {
		navigateTo('inloggning')
	}
	const onKeyDownLogin = () => {
		{event.key === 'Enter' ? console.log('personal login') : null}
	}

	
	

	return(
	<div className='header-desktop'>
		<img src="src\components\images\logo-no-background 1.png" alt="Företagslogga Feast & Fare" onClick={onClickHome} onKeyDown={onKeyDownHome} className="header-logo" tabIndex={0}/>
		<ul className="main-menu  desktop-main-menu" >
			<li onClick ={onClickMenu} onKeyDown={onKeyDownMenu} className='link' tabIndex={0}> Till menyn</li>
			<li onClick={onClickLogin} onKeyDown={onKeyDownLogin} className="link" tabIndex={0}>Personal</li>
				<li className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon"/>
					<p tabIndex={0}>0700-202020</p>
				</li>
			</ul>		
			<FontAwesomeIcon icon = {faShoppingBasket} className= {setAreItemsInCart ? 'cart cart-desktop link fa-lg'  : 'cart cart-desktop link fa-lg change-color-cart'} onClick={onClickCart} onKeyDown={onKeyDownCart} aria-label='Varukorg' />
			{areItemsInCart ? <TextUnderCartShopping/> : null }
			</div>
	)		
}


export default LargeScreenHeader