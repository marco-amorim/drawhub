import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiTheme } from './assets/styles/MuiTheme';
import App from './components/App';

ReactDOM.render(
	<MuiThemeProvider theme={MuiTheme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
