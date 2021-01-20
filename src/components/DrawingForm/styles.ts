import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import FormikField from '../FormikField';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
	margin: 3rem 0;
`;

export const FormikInput = styled(FormikField)`
	&& {
		margin: 20px 0px;
		width: 290px;
		height: 25px;
		border-radius: 5px;
		outline: none;
		border: 3px solid var(--blue-light);
		padding: 0px 5px;
	}
`;

export const MuiButton = styled(Button)`
	&& {
		margin-top: 2rem;
		width: 190px !important;
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
		text-transform: none;
		margin-left: auto;
		margin-right: auto;

		&:hover {
			background-color: var(--blue-light);
			box-shadow: none;
			border: none;
			outline: none;
		}
	}
`;
