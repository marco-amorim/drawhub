import firebase from 'firebase';

export const getAuth = () => {
	const auth = firebase.auth();

	return auth;
};

export const signInWithGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
};

export const signOut = () => {
	firebase.auth().signOut();
};
