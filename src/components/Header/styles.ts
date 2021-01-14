import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	margin-bottom: 125px;

	@media (max-width: 767px) {
		flex-direction: column;
		margin-bottom: 75px;
	}
`;

export const HeaderTitle = styled.h1`
	font: bold 2.5rem Source Code Pro;

	a {
		color: var(--green);
		text-decoration: none;
	}

	a span {
		color: var(--blue-hover);
	}

	@media (max-width: 767px) {
		order: 1;
	}
`;

export const HeaderLink = styled.div`
	a {
		background-color: var(--blue);
		color: var(--green);
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border-radius: 5px;
		height: 45px;
		width: 180px;
		font: bold 1.2rem Source Code Pro;
		transition: background-color 0.2s;
	}

	a:hover {
		background-color: var(--blue-hover);
	}

	@media (max-width: 767px) {
		order: 2;
		margin-top: 20px;
	}
`;
