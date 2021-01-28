import {
	HeaderLink,
	HeaderContainer,
	HeaderTitle,
	HeaderButton,
} from './styles';
import { signInWithGoogle } from '../../services/auth';
import Menu from '../Menu';
import LoadingSpinner from '../LoadingSpinner';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Header = () => {
	const { user, loading } = useContext(UserContext);

	const renderMenu = () => {
		if (user) {
			return <Menu photoURL={user.photoURL || ''} />;
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
