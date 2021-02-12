import { FormikValues } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DrawingForm from '../../components/DrawingForm';
import LoadingSpinner from '../../components/LoadingSpinner';
import { UserContext } from '../../context/UserContext';
import getDrawing from '../../services/drawings/getDrawing';
import updateDrawing from '../../services/drawings/updateDrawing';

const EditDrawing = () => {
	const { user, loading } = useContext(UserContext);
	const history = useHistory();

	const [initialAuthor, setInitialAuthor] = useState<string>('');
	const [initialTitle, setInitialTitle] = useState<string>('');
	const [initialEmail, setInitialEmail] = useState<string>('');
	const [initialImageUrl, setInitialImageUrl] = useState<string>('');
	const [drawingId] = useState<string>(window.location.pathname.substr(12));

	useEffect(() => {
		async function fetchDrawing() {
			const response = await getDrawing(drawingId);

			if (response) {
				setInitialAuthor(response.author);
				setInitialTitle(response.title);
				setInitialEmail(response.email);
				setInitialImageUrl(response.imageUrl);
			}
		}

		fetchDrawing();
	}, [drawingId]);

	const handleSubmit = (values: FormikValues) => {
		try {
			const { title, author, imageUrl, email } = values;
			updateDrawing(drawingId, author, imageUrl, title, email);
			alert('Drawing updated successfully');
			history.push('/posts/edit');
		} catch (error) {
			console.log('Error trying to update post, error: ' + error);
		}
	};

	const renderForm = () => {
		if (
			user &&
			initialAuthor &&
			initialEmail &&
			initialImageUrl &&
			initialTitle
		) {
			return (
				<DrawingForm
					formTitle="Edit your post"
					onSubmit={handleSubmit}
					initialAuthor={initialAuthor}
					initialEmail={initialEmail}
					initialImageUrl={initialImageUrl}
					initialTitle={initialTitle}
				/>
			);
		}

		if (
			(!initialAuthor || !initialEmail || !initialImageUrl || !initialTitle) &&
			user
		) {
			return <h3>This Drawing does not exist</h3>;
		}

		return <h3>You need to be logged in for this</h3>;
	};

	return (
		<>
			{loading ? <LoadingSpinner height="80px" width="80px" /> : renderForm()}
		</>
	);
};

export default EditDrawing;
