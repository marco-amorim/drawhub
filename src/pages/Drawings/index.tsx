import React from 'react';
import DrawingCard from '../../components/DrawingCard';
import { DrawingsContainer } from '../../assets/styles/DrawingsContainer';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Drawings = () => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const query = postsRef.orderBy('createdAt');
	const [posts] = useCollectionDataOnce(query, { idField: 'id' });

	return (
		<React.Fragment>
			<h3>Drawings</h3>
			<DrawingsContainer>
				{posts?.reverse().map((post: any, index) => {
					return (
						<li key={index}>
							<DrawingCard
								title={post.title}
								author={post.author}
								createdAt={post.createdAt}
								creatorId={post.uid}
								email={post.email}
								imageUrl={post.imageUrl}
								photoUrl={post.photoURL}
								likedBy={post.likedBy}
								likes={post.likes}
								docId={post.id}
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
