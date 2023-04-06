import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const Header = () => {

const OnClickCart =() =>{
	console.log('jag klickade på varukorg');
}

const OnClickBars =() =>{
	console.log('jag klickade på hamurgare');
}

const onClickHome = () => {
	console.log('jag vill hem!');
}

return(

	<section className='header'>

		<div className="header-mobile">
			<img src="src\components\images\logo-no-background 1.svg" alt="Företagslogga Feast & Fare" onClick={onClickHome}/>
			<FontAwesomeIcon icon = {faShoppingBasket} className='cart fa-lg' onClick={OnClickCart} aria-label='Varukorg'/>
			<FontAwesomeIcon icon = {faBars} className='bars fa-lg' onClick={OnClickBars} aria-label='Öppna menyval'/>
		</div>

		<div className='header-desktop'>
		<img src="src\components\images\logo-no-background 1.svg" alt="Företagslogga Feast & Fare" onClick={onClickHome} className="header-logo"/>
			<p> Till menyn</p>
			<p>Personal</p>
				<div className="phone">
					<FontAwesomeIcon icon = {faPhone} className="phone-icon fa-lg"/>
					<p>0700-202020</p>
				</div>
			</div>
	</section>
)

}

export default Header