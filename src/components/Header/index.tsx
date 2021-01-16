import {
	HeaderLink,
	HeaderContainer,
	HeaderTitle,
	HeaderButton,
} from './styles';
import { isLogged, signInWithGoogle, signOut } from '../../services/firebase';
import { CircularProgress } from '@material-ui/core';

const Header = () => {
	const { user, loading } = isLogged();

	const renderMenu = () => {
		if (user) {
			return <HeaderButton onClick={signOut}>Logout</HeaderButton>;
		}

		return <HeaderButton onClick={signInWithGoogle}>Login</HeaderButton>;
	};

	return (
		<HeaderContainer>
			<HeaderLink to="/drawings">View Drawings</HeaderLink>

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
