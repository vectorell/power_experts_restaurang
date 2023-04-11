
import './Header.css'
import SmallScreenHeader from "./SmallScreenHeader";
import LargeScreenHeader from "./LargeScreenHeader";

const Header = () => {

return(

		<section className='header'>
			<SmallScreenHeader/>
			<LargeScreenHeader/>
		</section>
	)

}

export default Header