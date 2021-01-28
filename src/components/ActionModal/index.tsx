import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface ActionModalProps {
	onConfirm: Function;
	onDismiss: Function;
	currentState: boolean;
	title: string;
	description: string;
}

const ActionModal: React.FC<ActionModalProps> = ({
	onConfirm,
	onDismiss,
	currentState,
	title,
	description,
}) => {
	const handleClose = () => {
		onDismiss();
	};

	const handleAction = () => {
		onConfirm();
	};

	return (
		<div>
			<Dialog
				open={currentState}
				TransitionComponent={Transition}
				disableScrollLock={true}
				onClose={handleClose}
				keepMounted
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{description}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						No
					</Button>
					<Button onClick={handleAction} color="primary">
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ActionModal;
