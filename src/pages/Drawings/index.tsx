import React from 'react';
import DrawingCard from '../../components/DrawingCard';
import { DrawingsContainer } from './styles';

const Drawings = () => {
	return (
		<React.Fragment>
			<h3>Drawings</h3>
			<DrawingsContainer>
				<li>
					<DrawingCard
						title=""
						author=""
						createdAt={new Date()}
						creatorId=""
						description=""
						email=""
						imageUrl=""
						photoUrl=""
					/>
				</li>

				<li>
					<DrawingCard
						title=""
						author=""
						createdAt={new Date()}
						creatorId=""
						description=""
						email=""
						imageUrl=""
						photoUrl=""
					/>
				</li>
				<li>
					<DrawingCard
						title=""
						author=""
						createdAt={new Date()}
						creatorId=""
						description=""
						email=""
						imageUrl=""
						photoUrl=""
					/>
				</li>
				<li>
					<DrawingCard
						title=""
						author=""
						createdAt={new Date()}
						creatorId=""
						description=""
						email=""
						imageUrl=""
						photoUrl=""
					/>
				</li>
			</DrawingsContainer>
		</React.Fragment>
	);
};

export default Drawings;
