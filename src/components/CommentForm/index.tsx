import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import createComment from '../../services/createComment';
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
	text: string;
}

interface CommentFormProps {
	docId: string;
}

const initialValues: CommentFormValues = {
	text: '',
};

const CommentForm: React.FC<CommentFormProps> = ({ docId }) => {
	const [user] = useAuthState(getAuth());
	const classes = useStyles();

	const handleSubmit = (values: FormikValues, actions: any) => {
		const { uid, photoURL, displayName } = user;
		const formValues = { ...values, displayName, uid, photoURL };
		createComment(formValues, docId);

		actions.resetForm({});
	};

	return (
		<Formik onSubmit={handleSubmit} initialValues={initialValues}>
			<Form>
				<FormikField name="text" label="Comment" required />
				<IconButton type="submit" className={classes.sendButton}>
					<AddComment />
				</IconButton>
			</Form>
		</Formik>
	);
};

export default CommentForm;
