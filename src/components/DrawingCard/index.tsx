import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {
	Delete,
	Email,
	FavoriteBorder,
	Favorite,
	InsertComment,
	InsertCommentOutlined,
} from '@material-ui/icons';
import DrawingModal from '../DrawingModal';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '../../services/firebase';
import deleteDrawing from '../../services/deleteDrawing';
import updateLikes from '../../services/updateLikes';
import getLikesInitialState from '../../services/getLikesInitialState';
import getLikesCount from '../../services/getLikesCount';
import { Collapse } from '@material-ui/core';
import CommentForm from '../CommentForm';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 345,
			backgroundColor: 'var(--shape-hover)',
			margin: '11px',

			'@media (max-width: 767px)': {
				width: 310,
			},
		},
		media: {
			height: 0,
			paddingTop: '56.25%',
		},
		rightIcons: {
			marginLeft: 'auto',
		},

		createdBy: {
			fontSize: '13px',
		},

		body: {
			height: 100,
		},
	})
);

interface DrawingCardProps {
	title: string;
	author: string;
	imageUrl: string;
	email: string;
	createdAt: firebase.firestore.Timestamp;
	photoUrl: string;
	docId: string;
	editMode: boolean;
}

const DrawingCard: React.FC<DrawingCardProps> = ({
	title,
	author,
	createdAt,
	email,
	imageUrl,
	photoUrl,
	docId,
	editMode,
}) => {
	const classes = useStyles();
	const [user] = useAuthState(getAuth());
	const [liked, setLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(0);
	const [expanded, setExpanded] = React.useState(false);

	useEffect(() => {
		async function initialLikeState() {
			setLiked(await getLikesInitialState(user?.uid, docId));
		}

		initialLikeState();

		async function initialLikesCount() {
			setLikesCount(await getLikesCount(docId));
		}

		initialLikesCount();
	});

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleDelete = async () => {
		await deleteDrawing(docId);
		window.location.reload();
	};

	const handleLikes = async () => {
		setLiked(await updateLikes(user?.uid, docId));
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={<Avatar src={photoUrl} aria-label="user photo" />}
				action={
					editMode && (
						<IconButton aria-label="delete" onClick={handleDelete}>
							<Delete />
						</IconButton>
					)
				}
				title={title}
				subheader={new Date(createdAt.toDate()).toLocaleDateString()}
			/>
			<CardMedia className={classes.media} image={imageUrl} title={title} />

			<CardContent className={classes.createdBy}>
				Created by: {author}
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites" onClick={handleLikes}>
					{liked ? <Favorite /> : <FavoriteBorder />}
				</IconButton>
				{likesCount}
				<IconButton
					aria-label="show comments"
					aria-expanded={expanded}
					onClick={handleExpandClick}
				>
					{expanded ? <InsertComment /> : <InsertCommentOutlined />}
				</IconButton>
				{0}
				<div className={classes.rightIcons}>
					<IconButton
						aria-label="send email"
						onClick={() => window.open('mailto:' + email, '_blank')}
					>
						<Email />
					</IconButton>
					<IconButton aria-label="full screen">
						<DrawingModal imageUrl={imageUrl} />
					</IconButton>
				</div>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<CommentForm />
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default DrawingCard;
