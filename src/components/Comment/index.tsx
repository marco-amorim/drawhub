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
import firebase from 'firebase/app';

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
	createdAt: firebase.firestore.Timestamp;
	displayName: string;
	photoURL: string;
	text: string;
}

const Comment: React.FC<CommentProps> = ({
	createdAt,
	displayName,
	photoURL,
	text,
}) => {
	const classes = useStyles();

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
					<IconButton>
						<Delete />
					</IconButton>
				</ListItemIcon>
			</ListItem>
		</>
	);
};

export default Comment;
