import firebase from 'firebase';

export const signInWithGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
};

export const signOut = () => {
	firebase.auth().signOut();
};
