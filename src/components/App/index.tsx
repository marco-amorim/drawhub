import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';
import Header from '../Header';
import Routes from '../../routes';
import '../../services/firebase';

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
