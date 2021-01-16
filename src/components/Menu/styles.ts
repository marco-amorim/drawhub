import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const MenuTrigger = styled(Button)`
	height: 45px;

	img {
		border-radius: 50%;
		height: 35px;
		width: 35px;
	}

	svg {
		color: var(--white);
		height: 30px;
		width: 30px;
	}
`;
