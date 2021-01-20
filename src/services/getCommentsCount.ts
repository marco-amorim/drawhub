import firebase from 'firebase/app';
import 'firebase/firestore';

const getCommentsCount = async (docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);
	const commentsCount = (await docRef.get()).get('commentsCount');

	return commentsCount;
};

export default getCommentsCount;
