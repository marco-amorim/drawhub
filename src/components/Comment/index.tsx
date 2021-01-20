import {
	ListItem,
	Avatar,
	ListItemAvatar,
	ListItemText,
	ListItemIcon,
	IconButton,
	makeStyles,
	Theme,
	createStyles,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import deleteComment from '../../services/deleteComment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: '36ch',
			color: 'var(--white)',
		},

		date: {
			fontSize: '0.75rem',
			justifyContent: 'flex-start',
		},
	})
);

interface CommentProps {
	comment: any;
	docId: string;
}

const Comment: React.FC<CommentProps> = ({ comment, docId }) => {
	const classes = useStyles();
	const { createdAt, photoURL, displayName, text } = comment;

	const handleDelete = async () => {
		await deleteComment(comment, docId);
	};

	return (
		<>
			<ListItem className={classes.date}>
				{new Date(createdAt.toDate()).toLocaleDateString()}
			</ListItem>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="profile" src={photoURL} />
				</ListItemAvatar>
				<ListItemText primary={displayName} secondary={text} />
				<ListItemIcon>
					<IconButton onClick={handleDelete}>
						<Delete />
					</IconButton>
				</ListItemIcon>
			</ListItem>
		</>
	);
};

export default Comment;
