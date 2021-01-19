import firebase from 'firebase/app';
import 'firebase/firestore';

const getLikesInitialState = async (userId: string, docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);
	const likes = (await docRef.get()).get('likedBy');

	if (!userId) {
		return false;
	}

	if (likes.includes(userId)) {
		return true;
	} else {
		return false;
	}
};

export default getLikesInitialState;
