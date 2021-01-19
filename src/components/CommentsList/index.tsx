import {
	createStyles,
	Divider,
	List,
	makeStyles,
	Theme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import getComments from '../../services/getComments';
import Comment from '../Comment';

interface CommentsListProps {
	docId: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: '36ch',
			color: 'var(--white)',
		},
	})
);

const CommentsList: React.FC<CommentsListProps> = ({ docId }) => {
	const classes = useStyles();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		let isMounted = true;

		renderComments().then((comments) => {
			if (isMounted) setComments(comments);
		});

		return () => {
			isMounted = false;
		};
	});

	async function renderComments() {
		try {
			const commentsArray = await getComments(docId);
			return commentsArray.map((comment: any, index: number) => {
				return (
					<React.Fragment key={index}>
						<Comment
							text={comment.text}
							createdAt={comment.createdAt}
							displayName={comment.displayName}
							photoURL={comment.photoURL}
						/>
						<Divider variant="inset" component="li" />
					</React.Fragment>
				);
			});
		} catch (error) {
			console.log(
				'We are having trouble trying to fetch the comments, error: ' + error
			);
		}
	}

	return <List className={classes.root}>{comments}</List>;
};

export default CommentsList;
