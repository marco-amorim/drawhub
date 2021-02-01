import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import { Form, Formik, FormikValues } from 'formik';
import React, { useContext } from 'react';
import createComment from '../../services/comments/createComment';
import FormikField from '../FormikField';
import { UserContext } from '../../context/UserContext';

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
	const { user } = useContext(UserContext);
	const classes = useStyles();

	const handleSubmit = (values: FormikValues, actions: any) => {
		if (user) {
			const { uid, photoURL, displayName } = user;
			const formValues = { ...values, displayName, uid, photoURL };
			createComment(formValues, docId);

			actions.resetForm({});
		}
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
