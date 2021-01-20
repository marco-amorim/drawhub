import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoadingContainer } from './styles';

interface LoadingSpinnerProps {
	width: string;
	height: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ width, height }) => {
	return (
		<LoadingContainer>
			<CircularProgress
				style={{
					color: 'var(--green)',
					textAlign: 'center',
					height: height,
					width: width,
				}}
			/>
		</LoadingContainer>
	);
};

export default LoadingSpinner;
