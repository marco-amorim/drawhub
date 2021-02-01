import {
	HeaderLink,
	HeaderContainer,
	HeaderTitle,
	HeaderButton,
} from './styles';
import { getAuth, signInWithGoogle } from '../../services/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Menu from '../Menu';
import LoadingSpinner from '../LoadingSpinner';

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
					<LoadingSpinner height="35px" width="35px" />
				</HeaderButton>
			) : (
				renderMenu()
			)}
		</HeaderContainer>
	);
};

export default Header;
