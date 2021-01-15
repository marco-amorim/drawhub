import styled from 'styled-components';

export const LandingStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
