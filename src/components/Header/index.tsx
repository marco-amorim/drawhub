import { Component } from 'react';
import { HeaderLink, HeaderStyles, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<HeaderStyles>
				<HeaderLink>
					<a href="/">View Drawings</a>
				</HeaderLink>

				<HeaderTitle>
					<a href="/">
						Draw<span>Hub</span>
					</a>
				</HeaderTitle>

				<HeaderLink>
					<a href="/">New Post</a>
				</HeaderLink>
			</HeaderStyles>
		);
	}
}

export default Header;
