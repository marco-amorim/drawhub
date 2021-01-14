import React from 'react';
import { LandingImage, LandingStyles } from './styles';
import landingImage from '../../assets/images/landing.svg';

const Landing = () => {
	return (
		<LandingStyles>
			Embrace your creativity
			<LandingImage src={landingImage} alt="At" />
		</LandingStyles>
	);
};

export default Landing;
