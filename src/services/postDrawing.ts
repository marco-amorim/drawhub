import firebase from 'firebase/app';
import 'firebase/firestore';
import { FormikValues } from 'formik';

const postDrawing = async (formValues: FormikValues) => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');

	const newPost = {
		...formValues,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		likes: 0,
		likedBy: [],
	};

	try {
		await postsRef.add(newPost);
	} catch (error) {
		console.log(error);
	}
};

export default postDrawing;
