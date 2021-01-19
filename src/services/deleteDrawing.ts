import firebase from 'firebase/app';
import 'firebase/firestore';

const deleteDrawing = async (docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');

	try {
		await postsRef.doc(docId).delete();
	} catch (error) {
		console.log(
			'We are having trouble trying to delete the post, error: ' + error
		);
	}
};

export default deleteDrawing;
