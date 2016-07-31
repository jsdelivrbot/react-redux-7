import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	// componentWillMount is a lifecycle method.  This will be called the first time the dom is loaded/rendered, but not on subsequent re-renders.
	// Because it's called once it's a great place to put my action creator.
	componentWillMount() {
		this.props.fetchPosts();
	};

	render() {
		return (
			<div>List fo blog posts</div>
		);
	};
};

export default connect(null, { fetchPosts })(PostsIndex);