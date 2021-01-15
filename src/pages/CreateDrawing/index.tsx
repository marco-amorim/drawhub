import React, { FormEvent, useState } from 'react';

import { Form, FormButton, FormInput, FormLabel } from './styles';

const CreateDrawing = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [email, setEmail] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(imageUrl, email, author, description);
	};

	return (
		<React.Fragment>
			<h3>Create your post</h3>

			<Form onSubmit={handleSubmit}>
				<FormLabel htmlFor="imageUrl">Image URL</FormLabel>
				<FormInput
					type="text"
					id="imageUrl"
					onChange={(e) => setImageUrl(e.target.value)}
				/>

				<FormLabel htmlFor="email">E-mail</FormLabel>
				<FormInput
					type="text"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<FormLabel htmlFor="author">Author</FormLabel>
				<FormInput
					type="text"
					id="author"
					onChange={(e) => setAuthor(e.target.value)}
				/>

				<FormLabel htmlFor="description">Description</FormLabel>
				<FormInput
					type="text"
					id="description"
					onChange={(e) => setDescription(e.target.value)}
				/>

				<FormButton type="submit">Submit</FormButton>
			</Form>
		</React.Fragment>
	);
};

export default CreateDrawing;
