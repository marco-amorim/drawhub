import React from 'react';
import DrawingCard from '../../components/DrawingCard';
import { DrawingsContainer } from '../../assets/styles/DrawingsContainer';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '../../services/firebase';

const UserDrawings = () => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const query = postsRef.orderBy('createdAt');
	const [posts] = useCollectionData(query, { idField: 'id' });
	const [user] = useAuthState(getAuth());

	return (
		<React.Fragment>
			<h3>Your Drawings</h3>
			<DrawingsContainer>
				{user &&
					posts?.reverse().map((post: any) => {
						if (user.uid === post.uid) {
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
										editMode={true}
									/>
								</li>
							);
						}
						return null;
					})}
			</DrawingsContainer>
		</React.Fragment>
	);
};

export default UserDrawings;
