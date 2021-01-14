import { Component } from 'react';
import { HeaderButton, HeaderStyles, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<HeaderStyles>
				<HeaderButton href="/">View Drawings</HeaderButton>
				<HeaderTitle href="/">
					Draw<span>Hub</span>
				</HeaderTitle>
				<HeaderButton href="/">New Post</HeaderButton>
			</HeaderStyles>
		);
	}
}

export default Header;
