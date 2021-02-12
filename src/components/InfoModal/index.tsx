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

interface InfoModalProps {
	onCallback: Function;
	currentState: boolean;
	title: string;
	description: string;
}

const InfoModal: React.FC<InfoModalProps> = ({
	onCallback,
	currentState,
	title,
	description,
}) => {
	const handleAction = () => {
		onCallback();
	};

	return (
		<div>
			<Dialog
				open={currentState}
				TransitionComponent={Transition}
				disableScrollLock={true}
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
					<Button onClick={handleAction} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default InfoModal;
