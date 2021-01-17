import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Email, FavoriteBorder, Fullscreen } from '@material-ui/icons';
import DrawingModal from '../DrawingModal';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
			backgroundColor: 'var(--shape-hover)',
			margin: '17px 0px',
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
	})
);

interface DrawingCardProps {
	title: string;
	author: string;
	imageUrl: string;
	description: string;
	email: string;
	createdAt: Date;
	creatorId: string;
	photoUrl: string;
}

const DrawingCard: React.FC<DrawingCardProps> = ({
	title,
	author,
	createdAt,
	description,
	email,
	imageUrl,
	photoUrl,
	creatorId,
}) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar
						src="https://avatars2.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
						aria-label="recipe"
					>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardMedia
				className={classes.media}
				image="https://i.ytimg.com/vi/PRCDU4GJuyQ/maxresdefault.jpg"
				title="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<CardContent className={classes.createdBy}>Created by: Marco</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteBorder />
				</IconButton>
				29
				<div className={classes.rightIcons}>
					<IconButton aria-label="send email">
						<Email />
					</IconButton>
					<IconButton aria-label="full screen">
						<DrawingModal imageUrl="https://i.ytimg.com/vi/PRCDU4GJuyQ/maxresdefault.jpg" />
					</IconButton>
				</div>
			</CardActions>
		</Card>
	);
};

export default DrawingCard;
