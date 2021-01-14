import { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink, HeaderStyles, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<HeaderStyles>
				<HeaderLink>
					<Link to="/drawings">view drawings</Link>
				</HeaderLink>

				<HeaderTitle>
					<Link to="/">
						draw<span>hub</span>
					</Link>
				</HeaderTitle>

				<HeaderLink>
					<Link to="/post/new">new post</Link>
				</HeaderLink>
			</HeaderStyles>
		);
	}
}

export default Header;
