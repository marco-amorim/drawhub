import React, { useContext } from 'react';
import * as Yup from 'yup';
import { FormikValues, Formik } from 'formik';

import { MuiButton, FormikInput, FormikForm } from './styles';
import LoadingSpinner from '../LoadingSpinner';
import { UserContext } from '../../context/UserContext';

interface DrawingFormProps {
	formTitle: string;
	onSubmit: (values: FormikValues) => void;
	initialTitle: string;
	initialAuthor: string;
	initialImageUrl: string;
	initialEmail: string;
}

const DrawingForm: React.FC<DrawingFormProps> = ({
	formTitle,
	onSubmit,
	initialTitle,
	initialAuthor,
	initialImageUrl,
	initialEmail,
}) => {
	const { user, loading } = useContext(UserContext);

	interface FormValues {
		title: string;
		author: string;
		imageUrl: string;
		email: string;
	}

	const initialValues: FormValues = {
		title: initialTitle,
		author: initialAuthor,
		imageUrl: initialImageUrl,
		email: initialEmail,
	};

	const CreateDrawingSchema = Yup.object().shape({
		title: Yup.string().required('This field is required'),
		author: Yup.string().required('This field is required'),
		imageUrl: Yup.string()
			.url('Invalid URL format')
			.required('This field is required'),
		email: Yup.string()
			.email('Invalid e-mail format')
			.required('This field is required'),
	});

	const handleSubmit = (values: FormikValues) => {
		onSubmit(values);
	};

	const renderForm = () => {
		return (
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={CreateDrawingSchema}
			>
				{({ dirty, isValid }) => {
					return (
						<FormikForm>
							<FormikInput name="title" label="Title" required />
							<FormikInput name="author" label="Author" required />
							<FormikInput name="imageUrl" label="Image URL" required />
							<FormikInput name="email" label="E-mail" required />
							<MuiButton
								disabled={!dirty || !isValid}
								type="submit"
								disableRipple
							>
								Submit
							</MuiButton>
						</FormikForm>
					);
				}}
			</Formik>
		);
	};

	const renderTitle = () => {
		if (user) {
			return <h3>{formTitle}</h3>;
		}

		return <h3>You need to be logged in for this</h3>;
	};

	return (
		<React.Fragment>
			{loading ? <LoadingSpinner height="80px" width="80px" /> : renderTitle()}
			{!loading && user && renderForm()}
		</React.Fragment>
	);
};

export default DrawingForm;
