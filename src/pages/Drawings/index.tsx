import React from 'react';
import DrawingCard from '../../components/DrawingCard';
import { DrawingsContainer } from '../../assets/styles/DrawingsContainer';
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
				{posts?.reverse().map((post: any) => {
					return (
						<li key={post.id}>
							<DrawingCard
								title={post.title}
								author={post.author}
								createdAt={post.createdAt}
								creatorId={post.uid}
								email={post.email}
								imageUrl={post.imageUrl}
								photoUrl={post.photoURL}
								editMode={false}
							/>
						</li>
					);
				})}
			</DrawingsContainer>
		</React.Fragment>
	);
};

export default Drawings;
