import React from 'react';
import { LandingImage, LandingStyles } from './styles';
import landingImage from '../../assets/images/landing.svg';

const Landing = () => {
	return (
		<React.Fragment>
			<h3>Embrace your creativity</h3>
			<LandingStyles>
				<LandingImage src={landingImage} alt="art" />
			</LandingStyles>
		</React.Fragment>
	);
};

export default Landing;
