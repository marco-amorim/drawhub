import { FormikValues } from 'formik';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DrawingForm from '../../components/DrawingForm';
import { UserContext } from '../../context/UserContext';
import createDrawing from '../../services/drawings/createDrawing';

const NewDrawing = () => {
	const { user, loading } = useContext(UserContext);
	const history = useHistory();

	const handleSubmit = (values: FormikValues) => {
		if (user && !loading) {
			const { uid, photoURL } = user;
			const formValues = { ...values, uid, photoURL };
			createDrawing(formValues);

			history.push('/');
		}
	};

	return (
		<DrawingForm
			formTitle="Create your post"
			onSubmit={handleSubmit}
			initialAuthor=""
			initialEmail=""
			initialImageUrl=""
			initialTitle=""
		/>
	);
};

export default NewDrawing;
