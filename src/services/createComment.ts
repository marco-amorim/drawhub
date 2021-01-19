import firebase from 'firebase/app';
import 'firebase/firestore';
import { FormikValues } from 'formik';

const createComment = async (formValues: FormikValues, docId: string) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const docRef = postsRef.doc(docId);

	console.log(formValues);
	console.log(docId);

	// await docRef.update({
	// 	comments: firebase.firestore.FieldValue.arrayRemove(formValues),
	// });
};

export default createComment;
