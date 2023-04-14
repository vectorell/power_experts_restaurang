import './HeroImage.css'
import { useContext, useState } from 'react'
import { ContextProvider } from '../App'


const HeroImage = () => {
	const {navigateTo} = useContext(ContextProvider)

	return(
		
		<section className= 'hero-image-container'>
			<img src="src\components\images\pexels-volkan-vardar-3887985.jpg" alt="Interiörbild från restaurangen" className='hero-image'  />
			<button onClick={ () => {
				navigateTo('menu')
				} } className='menu-button' >Till menyn</button>
		</section>
	)
}

export default HeroImage