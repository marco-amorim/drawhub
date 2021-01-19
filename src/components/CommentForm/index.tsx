import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '../../services/firebase';
import FormikField from '../FormikField';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		sendButton: {
			float: 'right',
		},
	})
);

interface CommentFormValues {
	comment: string;
}

const initialValues: CommentFormValues = {
	comment: '',
};

const CommentForm = () => {
	const [user] = useAuthState(getAuth());
	const classes = useStyles();

	const handleSubmit = (values: FormikValues, actions: any) => {
		const { uid, photoURL } = user;
		const formValues = { ...values, uid, photoURL };
		console.log(formValues);

		actions.resetForm({});
	};

	return (
		<Formik onSubmit={handleSubmit} initialValues={initialValues}>
			<Form>
				<FormikField name="comment" label="Comment" required />
				<IconButton type="submit" className={classes.sendButton}>
					<AddComment />
				</IconButton>
			</Form>
		</Formik>
	);
};

export default CommentForm;
