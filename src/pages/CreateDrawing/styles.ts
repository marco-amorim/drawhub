import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
`;

export const FormLabel = styled.label`
	color: var(--green);
`;

export const FormInput = styled.input`
	margin: 20px 0px;
	width: 290px;
	height: 25px;
	border-radius: 5px;
	outline: none;
	border: 3px solid var(--blue-light);
	padding: 0px 5px;
`;

export const FormButton = styled.button`
	margin-top: 1rem;
	width: 190px;
	height: 45px;
	border: none;
	cursor: pointer;
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

	&:hover {
		background-color: var(--blue-light);
	}
`;
