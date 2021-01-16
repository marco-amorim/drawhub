import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';
import { initializeFirebase } from '../../services/firebase';
import Header from '../Header';
import Routes from '../Routes';

initializeFirebase();

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
