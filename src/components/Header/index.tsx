import { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink, HeaderStyles, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<HeaderStyles>
				<HeaderLink>
					<Link to="/drawings">View Drawings</Link>
				</HeaderLink>

				<HeaderTitle>
					<Link to="/">
						Draw<span>hub</span>
					</Link>
				</HeaderTitle>

				<HeaderLink>
					<Link to="/post/new">New Post</Link>
				</HeaderLink>
			</HeaderStyles>
		);
	}
}

export default Header;
