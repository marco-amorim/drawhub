import React from 'react';
import DrawingCard from '../../components/DrawingCard';
import { DrawingsContainer } from './styles';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Drawings = () => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const query = postsRef.orderBy('createdAt');
	const [posts] = useCollectionData(query, { idField: 'id' });

	return (
		<React.Fragment>
			<h3>Drawings</h3>
			<DrawingsContainer>
				{posts?.map((post: any) => {
					return (
						<li key={post.id}>
							<DrawingCard
								title={post.title}
								author={post.author}
								createdAt={post.createdAt}
								creatorId={post.uid}
								description={post.description}
								email={post.email}
								imageUrl={post.imageUrl}
								photoUrl={post.photoURL}
							/>
						</li>
					);
				})}
			</DrawingsContainer>
		</React.Fragment>
	);
};

export default Drawings;
