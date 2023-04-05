import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

return(

	<section className='header'>
		<img src="src\components\images\logo-no-background 1.svg" alt="Företagslogga Feast & Fare" />
		<FontAwesomeIcon icon = {faCartShopping}/>
		<FontAwesomeIcon icon = {faBars}/>

	</section>
)

}

export default Header