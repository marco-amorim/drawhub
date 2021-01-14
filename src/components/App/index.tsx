import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';
import Header from '../Header';
import Routes from '../Routes';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Routes />
		</BrowserRouter>
	);
};

export default App;
