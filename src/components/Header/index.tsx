import { Component } from 'react';
import { HeaderLink, HeaderContainer, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<HeaderLink to="/drawings">View Drawings</HeaderLink>

				<HeaderTitle to="/">
					Draw<span>hub</span>
				</HeaderTitle>

				<HeaderLink to="/post/new">New Post</HeaderLink>
			</HeaderContainer>
		);
	}
}

export default Header;
