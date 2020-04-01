import React from 'react';
import CommentCard from './CommentCard';
import { CardColumns } from 'react-bootstrap';

export default function CommentPost(props) {
	console.log('props', props);
	return (
		<CardColumns>
			{props.comment.map((comment, key) => (
				<CommentCard name={comment.name} email={comment.email} body={comment.body} key={key} />
			))}
		</CardColumns>
	);
}
