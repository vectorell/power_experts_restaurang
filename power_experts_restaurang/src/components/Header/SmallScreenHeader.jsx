import { useContext } from "react";
import { ContextProvider } from "../../App";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import logoNoBackground from "../images/logo-no-background 1.png"


const SmallScreenHeader = () => {
	const { navigateTo, selectedFoodItems } = useContext(ContextProvider)

	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	const [areItemsInCart, setAreItemsInCart] = useState(false);

	const dataFromParent = useContext(ContextProvider)

	// För att stänga hamburgermenyn genom att klicka utanför  
	const ref = useRef()

	useEffect(() => {
		const checkIfClickedOutside = e => {
			{ hamburgerOpen && ref.current && !ref.current.contains(e.target) ? setHamburgerOpen(false) : null }
		}

		document.addEventListener('mousedown', checkIfClickedOutside)

		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside)
		}
	}, [hamburgerOpen])


	//dyker upp text under korgen och byts färg på korgen när beställs mat
	const TextUnderCartShopping = () => {
		return (
			<FontAwesomeIcon icon={faPlus} className="text-under-cart fa-xs" />
		)
	}
	useEffect(() => {
		if (selectedFoodItems.length > 0) {
			console.log('du har beställt');

			setAreItemsInCart(true)
		} else {
			setAreItemsInCart(false);
		}
	}, [selectedFoodItems])



	// gå till varukorg
	const onClickCart = () => {
		console.log('jag klickade på varukorg');
		navigateTo('varukorg')
	}
	const onKeyDownCart = () => {
		{ event.key === 'Enter' ? navigateTo('varukorg') : null }
	}

	// öppna el. stänga hamburgare
	const onClickToggleMainMenu = () => {
		console.log('jag klickade på hamburgaren');
		setHamburgerOpen(!hamburgerOpen)
	}
	const onKeyDownToggleMainMenu = () => {
		{ event.key === 'Enter' ? setHamburgerOpen(!hamburgerOpen) : null }
	}

	// gå till landingpage
	const onClickHome = () => {
		console.log('jag vill hem!');
		navigateTo('landing')
	}
	const onKeyDownHome = () => {
		{ event.key === 'Enter' ? navigateTo('landing') : null }
	}

	// gå till menyn
	const onClickMenu = () => {
		console.log('Jag vill se menyn');
		navigateTo('menu')
		setHamburgerOpen(!hamburgerOpen)
	}
	const onKeyDownMenu = () => {
		{ event.key === 'Enter' ? navigateTo('menu') : null }
	}

	// gå till personal login
	const onClickLogin = () => {
		console.log('personal login');
		setHamburgerOpen(!hamburgerOpen)
		navigateTo('inloggning')
	}
	const onKeyDownLogin = () => {
		{ event.key === 'Enter' ? console.log('personal login') : null }
	}

	return (
		<div>
			<div className="header-mobile">
				<img src={logoNoBackground} alt="Företagslogga Feast & Fare" onClick={onClickHome} onKeyDown={onKeyDownHome} className="header-logo" tabIndex={0} />

				<div className="cart-container">
					{areItemsInCart ? <TextUnderCartShopping /> : null}
					<FontAwesomeIcon icon={faShoppingBasket} className={selectedFoodItems.length > 0 ? 'cart cart-mobile link fa-lg change-color-cart' : 'cart cart-mobile link fa-lg '} onClick={onClickCart} onKeyDown={onKeyDownCart} aria-label='Varukorg' tabIndex={0} />
				</div>

				<FontAwesomeIcon icon={faBars} className='bars fa-lg mobile-link' onClick={onClickToggleMainMenu} onKeyDown={onKeyDownToggleMainMenu} aria-label='Öppna menyval' tabIndex={0} />

			</div>

			<nav className={!hamburgerOpen ? 'hamburger-overlay' : 'hamburger-overlay-open'} ref={ref}>
				<FontAwesomeIcon icon={faClose} className=" faXmark fa-lg mobile-link" onClick={onClickToggleMainMenu} onKeyDown={onKeyDownToggleMainMenu} aria-label='Stäng menyval' tabIndex={0} />
				<ul className="hamburger-main-menu">

					<li onClick={onClickMenu} onKeyDown={onKeyDownMenu} className='mobile-link' tabIndex={0}> Till menyn</li>
					{dataFromParent.isLoggedIn ? (
						<li onClick={() => {
							dataFromParent.setIsLoggedIn((false))
							dataFromParent.navigateTo('landing')
							setHamburgerOpen(!hamburgerOpen)
						}} className="mobile-link" tabIndex={0}>Logga ut</li>
					) : (
						<li onClick={
							onClickLogin
							
						} onKeyDown={onKeyDownLogin} className="mobile-link" tabIndex={0}>Personal</li>
					)}
					
					<li className="phone">
						<FontAwesomeIcon icon={faPhone} className="phone-icon " />
						<p>0700-202020</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default SmallScreenHeader