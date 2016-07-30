import React, { Component } from 'react';

class PostsIndex extends Component {
	// componentWillMount is a lifecycle method.  This will be called the first time the dom is loaded/rendered, but not on subsequent re-renders.
	// Because it's called once it's a great place to put my action creator.
	componentWillMount() {
		console.log('this would be a good time to call an action creator to fetch posts');
	};

	render() {
		return (
			<div>List fo blog posts</div>
		);
	};
};

export default PostsIndex;