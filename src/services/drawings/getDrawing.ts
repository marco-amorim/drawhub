import firebase from 'firebase/app';
import 'firebase/firestore';

const getDrawing = async (docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');

	try {
		const doc = await postsRef
			.doc(docId)
			.get()
			.then((doc) => {
				return doc.data();
			});

		return doc;
	} catch (error) {
		console.log(
			'We are having trouble trying to get the post, error: ' + error
		);
	}
};

export default getDrawing;
