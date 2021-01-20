import firebase from 'firebase/app';
import 'firebase/firestore';

const deleteComment = async (comment: any, docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);

	await docRef.update({
		comments: firebase.firestore.FieldValue.arrayRemove(comment),
		commentsCount: firebase.firestore.FieldValue.increment(-1),
	});
};

export default deleteComment;
