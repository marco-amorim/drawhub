import React from 'react';

import { Form, FormButton, FormInput, FormLabel, FormTitle } from './styles';

const CreateDrawing = () => {
	return (
		<React.Fragment>
			<FormTitle>Create your post</FormTitle>

			<Form>
				<FormLabel htmlFor="imageUrl">Image URL</FormLabel>
				<FormInput type="text" id="imageUrl" />

				<FormLabel htmlFor="email">E-mail</FormLabel>
				<FormInput type="text" id="email" />

				<FormLabel htmlFor="author">Author</FormLabel>
				<FormInput type="text" id="author" />

				<FormLabel htmlFor="description">Description</FormLabel>
				<FormInput type="text" id="description" />

				<FormButton type="submit">Submit</FormButton>
			</Form>
		</React.Fragment>
	);
};

export default CreateDrawing;
