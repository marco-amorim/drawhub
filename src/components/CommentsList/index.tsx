import React, { useEffect, useState } from 'react';
import getComments from '../../services/getComments';

interface CommentsListProps {
	docId: string;
}

const CommentsList: React.FC<CommentsListProps> = ({ docId }) => {
	useEffect(() => {
		async function fetchComments() {
			await renderComments();
		}

		fetchComments();
	});

	const [comments, setComments] = useState([]);

	async function renderComments() {
		try {
			const commentsArray = await getComments(docId);
			setComments(
				commentsArray.map(
					(comment: any, index: string | number | null | undefined) => {
						return <h1 key={index}>{comment.text}</h1>;
					}
				)
			);
		} catch (error) {
			console.log(
				'We are having trouble trying to fetch the comments, error: ' + error
			);
		}
	}

	return <div>{comments}</div>;
};

export default CommentsList;
