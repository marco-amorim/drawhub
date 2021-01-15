import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiTheme } from './assets/styles/MuiTheme';
import App from './components/App';

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={MuiTheme}>
			<App />
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
