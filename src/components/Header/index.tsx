import {
	HeaderLink,
	HeaderContainer,
	HeaderTitle,
	HeaderButton,
} from './styles';
import { getAuth, signInWithGoogle } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CircularProgress } from '@material-ui/core';
import Menu from '../Menu';

const Header = () => {
	const [user, loading] = useAuthState(getAuth());

	const renderMenu = () => {
		if (user) {
			return <Menu photoURL={user.photoURL} />;
		}

		return <HeaderButton onClick={signInWithGoogle}>Login</HeaderButton>;
	};

	return (
		<HeaderContainer>
			<HeaderLink to="/posts/view">View Drawings</HeaderLink>

			<HeaderTitle to="/">
				Draw<span>hub</span>
			</HeaderTitle>

			{loading ? (
				<HeaderButton disabled={true} style={{ pointerEvents: 'none' }}>
					<CircularProgress
						style={{ color: '#04d361', height: '35px', width: '35px' }}
					/>
				</HeaderButton>
			) : (
				renderMenu()
			)}
		</HeaderContainer>
	);
};

export default Header;
