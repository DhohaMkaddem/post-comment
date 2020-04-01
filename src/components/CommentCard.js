import React from 'react';
import { Card } from 'react-bootstrap';

export default function CommentCard(props) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.body}</Card.Text>
			</Card.Body>

			<Card.Footer>
				<small className="text-muted">{props.email}</small>
			</Card.Footer>
		</Card>
	);
}
