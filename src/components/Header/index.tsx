import { Component } from 'react';
import { HeaderLink, HeaderStyles, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<HeaderStyles>
				<HeaderLink>
					<a href="/">view drawings</a>
				</HeaderLink>

				<HeaderTitle>
					<a href="/">
						draw<span>hub</span>
					</a>
				</HeaderTitle>

				<HeaderLink>
					<a href="/">new post</a>
				</HeaderLink>
			</HeaderStyles>
		);
	}
}

export default Header;
