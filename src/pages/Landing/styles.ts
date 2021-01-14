import styled from 'styled-components';

export const LandingStyles = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 75px;
`;

export const LandingImage = styled.img`
	height: 350px;
	width: 350px;
	margin-top: 100px;

	@media (max-width: 480px) {
		height: 275px;
		width: 275px;
		margin-top: 50px;
	}
`;
