import firebase from 'firebase/app';
import 'firebase/firestore';

const getLikesCount = async (docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);
	const likesCount = (await docRef.get()).get('likes');

	return likesCount;
};

export default getLikesCount;
