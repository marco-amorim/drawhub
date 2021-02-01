import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';
import Header from '../Header';
import Routes from '../../routes';
import '../../services/firebase';
import { UserContext } from '../../context/UserContext';
import firebase from 'firebase';

const App = () => {
	const [user, setUser] = useState<firebase.User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setLoading(true);
			if (user) {
				setLoading(false);
				setUser(user);
			}

			if (!user) {
				setLoading(false);
				setUser(null);
			}
		});
	}, []);

	return (
		<BrowserRouter>
			<GlobalStyles />
			<UserContext.Provider value={{ user, loading }}>
				<Header />
				<Routes />
			</UserContext.Provider>
		</BrowserRouter>
	);
};

export default App;
