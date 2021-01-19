import { createMuiTheme } from '@material-ui/core';

export const MuiTheme = createMuiTheme({
	overrides: {
		MuiInputBase: {
			input: {
				color: 'var(--white)',
				fontFamily: 'Source Code Pro',
			},
		},

		MuiFormHelperText: {
			root: {
				color: 'var(--error)',
				fontFamily: 'Source Code Pro',
			},
		},

		MuiInput: {
			underline: {
				'&:before': {
					borderBottom: '2px solid var(--blue-light)',
				},

				'&:after': {
					borderBottom: '2px solid var(--blue-light)',
				},

				'&:hover:not(.Mui-disabled):before': {
					borderBottom: '2px solid var(--blue-light)',
				},
			},

			formControl: {
				margin: '15px 0px',
			},
		},

		MuiFormLabel: {
			root: {
				color: 'var(--white)',
				fontSize: '1rem',
				fontFamily: 'Source Code Pro',
				'&$focused': {
					color: 'var(--green)',
				},
			},
		},

		MuiPaper: {
			root: {
				color: 'var(--white)',
				backgroundColor: 'var(--shape-middle)',
			},
		},

		MuiListItem: {
			button: {
				'&:hover': {
					backgroundColor: 'var(--shape-hover)',
				},
			},
		},

		MuiTypography: {
			colorTextSecondary: {
				color: 'var(--white)',
			},
			body2: {
				fontFamily: 'Source Code Pro',
			},
			body1: {
				fontFamily: 'Source Code Pro',
			},
		},

		MuiIconButton: {
			root: {
				color: 'var(--white)',
			},
		},

		MuiSvgIcon: {
			root: {
				display: 'flex',
				alignItems: 'center',
			},
		},
	},
});
