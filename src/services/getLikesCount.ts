import firebase from 'firebase/app';
import 'firebase/firestore';

const getLikesCount = async (docId: any) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);
	const likes = (await docRef.get()).get('likes');

	return likes;
};

export default getLikesCount;
