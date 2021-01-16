import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 30px;
	margin-bottom: 125px;

	@media (max-width: 767px) {
		flex-direction: column-reverse;
		margin-bottom: 75px;
	}
`;

export const HeaderTitle = styled(Link)`
	font: bold 2.5rem Source Code Pro;
	color: var(--green);
	text-decoration: none;
	span {
		color: var(--blue-light);
	}

	@media (max-width: 767px) {
		order: 2;
	}
`;

const buttonStyles = css`
	background-color: var(--blue);
	color: var(--green);
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	border-radius: 5px;
	height: 45px;
	width: 180px;
	font: bold 1.17em Source Code Pro;
	transition: background-color 0.2s;
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: var(--blue-light);
	}

	@media (max-width: 767px) {
		order: 1;
		margin-top: 20px;
	}
`;

export const HeaderLink = styled(Link)`
	${buttonStyles}
`;

export const HeaderButton = styled.button`
	${buttonStyles}
`;
