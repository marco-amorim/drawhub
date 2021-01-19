import firebase from 'firebase/app';
import 'firebase/firestore';

const getComments = async (docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);
	const comments = (await docRef.get()).get('comments');

	return comments;
};

export default getComments;
