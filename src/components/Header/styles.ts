import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;

	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

export const HeaderTitle = styled.a`
	color: var(--green);
	text-decoration: none;
	font-size: 2rem;
	font-weight: bold;

	span {
		color: var(--blue-hover);
	}

	@media (max-width: 576px) {
		order: 1;
	}
`;

export const HeaderButton = styled.a`
	background-color: var(--blue);
	color: var(--green);
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	border-radius: 5px;
	padding: 3px;
	height: 45px;
	width: 180px;
	font: bold 1.2rem Source Code Pro;

	&:hover {
		background-color: var(--blue-hover);
	}

	@media (max-width: 576px) {
    order: 2;
    margin-top: 20px;
	}
`;
