import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
	const getComment = () => {
		props.getCommentbyId(props.id);
	};
	return (
		<Card>
			<Card.Img
				variant="top"
				src="https://media.istockphoto.com/vectors/business-man-meeting-at-a-big-conference-desk-vector-id628995158"
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.body}</Card.Text>
			</Card.Body>
			<Link to={`/comment/${props.id}`} onClick={getComment}>
				comment post
			</Link>
			<Card.Footer>
				<small className="text-muted">Last updated 3 mins ago</small>
			</Card.Footer>
		</Card>
	);
}
