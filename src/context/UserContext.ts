import firebase from 'firebase';
import { createContext } from 'react';

type userContext = {
	user: firebase.User | null;
	loading: boolean;
};

export const UserContext = createContext<userContext>({
	user: null,
	loading: true,
});
