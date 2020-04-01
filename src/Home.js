import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList';
import ProfileList from './components/ProfileList';
import CommentPost from './components/CommentPost';

export default class Home extends Component {
	state = {
		profiles: [],
		postsById: [],
		comment: [],
	};

	getProfile = () =>
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				//console.log(response);
				console.log(response.data);
				this.setState({ ...this.state, profiles: response.data });
			})
			.catch(error => {
				console.error(error);
			});
	componentDidMount() {
		this.getProfile();
	}

	getPostbyId = id =>
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/`, id)
			.then(response => {
				const result = response.data.filter(post => post.userId === id);
				console.log('result', result);
				this.setState({ ...this.state, postsById: result });
			})
			.catch(error => {
				console.error(error);
			});

	getCommentbyId = id =>
		axios
			.get('https://jsonplaceholder.typicode.com/comments?postId=3', id)
			.then(response => {
				const result = response.data.filter(comment => comment.postId === id);
				console.log('result', result);
				this.setState({ ...this.state, comment: result });
			})
			.catch(error => {
				console.error(error);
			});

	render() {
		console.log('this.state.comment', this.state.comment);
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route
							path="/"
							exact
							render={props => (
								<ProfileList
									{...props}
									posts={this.state.postsById}
									profiles={this.state.profiles}
									getPostbyId={this.getPostbyId}
								/>
							)}
						/>
						<Route
							path="/PostList/:id"
							exact
							render={props => (
								<PostList
									{...props}
									posts={this.state.postsById}
									getCommentbyId={this.getCommentbyId}
									comment={this.state.comment}
								/>
							)}
						/>
						<Route
							path="/comment/:id"
							exact
							render={props => <CommentPost {...props} comment={this.state.comment} />}
						/>
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}
