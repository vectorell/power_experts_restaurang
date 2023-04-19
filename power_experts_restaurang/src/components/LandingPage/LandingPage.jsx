import OpeningHours from "./OpeningHours"
import HeroImage from "./HeroImage"
import './LandingPage.css'

const LandingPage = () => {

	return(
		<section className='landing-page'>
			<HeroImage/>
			<OpeningHours/>
 		</section>
	)
	
}

export default LandingPage