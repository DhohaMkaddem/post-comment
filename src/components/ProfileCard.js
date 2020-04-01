import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProfileCard(props) {
	const getPosts = () => {
		props.getPostbyId(props.id);
		console.log(props);
	};
	return (
		<Card style={{ width: '100%' }}>
			<Card.Img variant="top" src={require('../asserts/challenge.png')} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.website}</Card.Text>
				<Link to={`/PostList/${props.id}`} onClick={getPosts}>
					show post
				</Link>
			</Card.Body>
		</Card>
	);
}
