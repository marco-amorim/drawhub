import firebase from 'firebase/app';
import 'firebase/firestore';
import { FormikValues } from 'formik';

const createComment = async (formValues: FormikValues, docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);

	const newComment = {
		...formValues,
		createdAt: new Date(),
	};

	await docRef.update({
		comments: firebase.firestore.FieldValue.arrayUnion(newComment),
		commentsCount: firebase.firestore.FieldValue.increment(1),
	});
};

export default createComment;
