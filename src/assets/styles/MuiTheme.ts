import { createMuiTheme } from '@material-ui/core';

export const MuiTheme = createMuiTheme({
	overrides: {
		MuiInputBase: {
			input: {
				color: '#e1e1e6',
				fontFamily: 'Source Code Pro',
			},
		},

		MuiFormHelperText: {
			root: {
				color: '#f44336',
				fontFamily: 'Source Code Pro',
			},
		},

		MuiInput: {
			underline: {
				'&:before': {
					borderBottom: '2px solid #0071bd',
				},

				'&:after': {
					borderBottom: '2px solid #0071bd',
				},

				'&:hover:not(.Mui-disabled):before': {
					borderBottom: '2px solid #0071bd',
				},
			},

			formControl: {
				margin: '15px 0px',
			},
		},

		MuiFormLabel: {
			root: {
				color: '#e1e1e6',
				fontSize: '1rem',
				fontFamily: 'Source Code Pro',
			},
		},
	},
});