import React, { Component } from 'react';
import PostCard from './PostCard';
import { CardColumns } from 'react-bootstrap';

export default class PostList extends Component {
	render() {
		return (
			<CardColumns>
				{this.props.posts.map((post, key) => (
					<PostCard
						title={post.title}
						body={post.body}
						key={key}
						id={post.id}
						getCommentbyId={this.props.getCommentbyId}
						comment={this.props.comment}
					/>
				))}
			</CardColumns>
		);
	}
}
