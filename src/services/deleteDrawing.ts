import firebase from 'firebase/app';
import 'firebase/firestore';

const deleteDrawing = async (docId: any) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');

	try {
		await postsRef.doc(docId).delete();
	} catch (error) {
		console.log(error);
	}
};

export default deleteDrawing;
