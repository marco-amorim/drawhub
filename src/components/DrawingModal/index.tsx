import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Close, Fullscreen } from '@material-ui/icons';
import { IconButton, Backdrop, Modal, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		modalContainer: {
			outline: 'none',
		},

		closeButton: {
			position: 'absolute',
			top: '10px',
			right: '10px',
		},
	})
);

interface DrawingModalProps {
	imageUrl: string;
}

const DrawingModal: React.FC<DrawingModalProps> = ({ imageUrl }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Fullscreen onClick={handleOpen} />

			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				disableScrollLock={true}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.modalContainer}>
						<IconButton className={classes.closeButton} onClick={handleClose}>
							<Close style={{ color: 'var(--green' }} />
						</IconButton>
						<img src={imageUrl} alt="Drawing" />
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default DrawingModal;
