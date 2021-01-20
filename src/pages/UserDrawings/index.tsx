import React from 'react';
import DrawingCard from '../../components/DrawingCard';
import { DrawingsContainer } from '../../assets/styles/DrawingsContainer';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '../../services/firebase';
import { LoadingContainer } from '../../assets/styles/LoadingContainer';
import { CircularProgress } from '@material-ui/core';

const UserDrawings = () => {
	const firestore = firebase.firestore();
	const postsRef = firestore.collection('posts');
	const query = postsRef.orderBy('createdAt');
	const [posts] = useCollectionDataOnce(query, { idField: 'id' });
	const [user, loading] = useAuthState(getAuth());

	const renderTitle = () => {
		if (user) {
			return <h3>Your Drawings</h3>;
		}

		return <h3>You need to be logged in for this :/</h3>;
	};

	return (
		<React.Fragment>
			{loading ? (
				<LoadingContainer>
					<CircularProgress
						style={{
							color: 'var(--green)',
							textAlign: 'center',
							height: '80px',
							width: '80px',
						}}
					/>
				</LoadingContainer>
			) : (
				renderTitle()
			)}

			<DrawingsContainer>
				{user &&
					posts?.reverse().map((post: any, index) => {
						if (user.uid === post.uid) {
							return (
								<li key={index}>
									<DrawingCard
										title={post.title}
										author={post.author}
										createdAt={post.createdAt}
										email={post.email}
										imageUrl={post.imageUrl}
										photoUrl={post.photoURL}
										docId={post.id}
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
