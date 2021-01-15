import firebase from 'firebase/app';
import 'firebase/firestore';
import { FormikValues } from 'formik';

const postDrawing = async (values: FormikValues) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');

	const newPost = {
		...values,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};

	try {
		await postsRef.add(newPost);
	} catch (error) {
		console.log(error);
	}
};

export default postDrawing;
