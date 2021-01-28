import firebase from 'firebase/app';
import 'firebase/firestore';

const updateLikes = async (userId: string, docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);
	const likedBy = (await docRef.get()).get('likedBy');

	if (!userId) {
		return false;
	}

	if (likedBy.includes(userId)) {
		await docRef.update({
			likedBy: firebase.firestore.FieldValue.arrayRemove(userId),
			likes: firebase.firestore.FieldValue.increment(-1),
		});
		return false;
	} else {
		await docRef.update({
			likedBy: firebase.firestore.FieldValue.arrayUnion(userId),
			likes: firebase.firestore.FieldValue.increment(1),
		});
		return true;
	}
};

export default updateLikes;
