import React, { Component } from 'react';

export default class PostsIndex extends Component {
	componentWillMount() {
		console.log('this would be a good time to call an action creator to fetch posts');
	};

	render() {
		return (
			<div>List fo blog posts</div>
		);
	};
}