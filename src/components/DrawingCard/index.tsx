import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Email, FavoriteBorder } from '@material-ui/icons';
import DrawingModal from '../DrawingModal';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '../../services/firebase';
import deleteDrawing from '../../services/deleteDrawing';

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
	creatorId: string;
	photoUrl: string;
	likes: Number;
	likedBy: [];
	docId: any;
	editMode: boolean;
}

const DrawingCard: React.FC<DrawingCardProps> = ({
	title,
	author,
	createdAt,
	email,
	imageUrl,
	photoUrl,
	creatorId,
	likes,
	likedBy,
	docId,
	editMode,
}) => {
	const classes = useStyles();
	const [user] = useAuthState(getAuth());

	const handleDelete = () => {
		deleteDrawing(docId);
		window.location.reload();
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
				<IconButton aria-label="add to favorites">
					<FavoriteBorder />
				</IconButton>
				{likes}
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
		</Card>
	);
};

export default DrawingCard;
