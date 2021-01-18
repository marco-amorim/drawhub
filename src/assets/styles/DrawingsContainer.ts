import styled from 'styled-components';

export const DrawingsContainer = styled.ul`
	list-style: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	padding: 0px 10px;
	margin: 3rem 0px;

	@media (max-width: 767px) {
		justify-content: center;
	}
`;
