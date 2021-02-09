import styled from 'styled-components';

export const DrawingsContainer = styled.ul`
	list-style: none;
	align-items: center;
	flex-wrap: wrap;
	padding: 0px 10px;
	margin: 3rem auto 3rem auto;
	display: grid;

	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 991px) {
		display: flex;
		justify-content: center;
	}
`;
