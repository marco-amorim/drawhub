import firebase from 'firebase/app';
import 'firebase/firestore';

const updateDrawing = async (
	docId: string,
	author: string,
	imageUrl: string,
	title: string,
	email: string
) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');

	try {
		await postsRef.doc(docId).update({
			author: author,
			imageUrl: imageUrl,
			title: title,
			email: email,
		});
	} catch (error) {
		console.log(
			'We are having trouble trying to update the post, error: ' + error
		);
	}
};

export default updateDrawing;
