import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import FormikField from '../NewDrawing/FormikField';

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

const handleSubmit = (values: FormikValues, actions: any) => {
	const { comment } = values;
	console.log({ comment });

	actions.resetForm({});
};

const CommentForm = () => {
	const classes = useStyles();

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
