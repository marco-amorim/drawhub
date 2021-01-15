import React from 'react';
import * as Yup from 'yup';
import { Form, FormikValues } from 'formik';

import { FormikValidation, FormButton, FormInput } from './styles';

interface FormValues {
	author: string;
	imageUrl: string;
	description: string;
	email: string;
}

const initialValues: FormValues = {
	author: '',
	imageUrl: '',
	description: '',
	email: '',
};

const CreateDrawingSchema = Yup.object().shape({
	author: Yup.string().required('This field is required'),
	imageUrl: Yup.string().url('Invalid URL').required('This field is required'),
	description: Yup.string().required('This field is required'),
	email: Yup.string()
		.email('Invalid e-mail format')
		.required('This field is required'),
});

const DrawingForm: React.FC = () => {
	const handleSubmit = (values: FormikValues) => {
		console.log(values);
	};

	return (
		<React.Fragment>
			<h3>Create your post</h3>

			<FormikValidation
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={CreateDrawingSchema}
			>
				{({ dirty, isValid }) => {
					return (
						<Form>
							<FormInput name="author" label="Author" required />
							<FormInput name="imageUrl" label="Image URL" required />
							<FormInput name="description" label="Description" required />
							<FormInput name="email" label="E-mail" required />
							<FormButton
								disabled={!dirty || !isValid}
								type="submit"
								disableRipple
							>
								Submit
							</FormButton>
						</Form>
					);
				}}
			</FormikValidation>
		</React.Fragment>
	);
};

export default DrawingForm;
