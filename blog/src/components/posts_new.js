import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		// below is same as:
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;
		// so on and so forth
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a New Post</h3>
				<div className="form-group">
					<label>Title</label>
					{/* {...title} destructures the object into its separate keyes and values.  For example: onChange, onBlur, etc. */}
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

// redux connect and reduxForm do the same thing, but have a different order, reduxForm has the additional config 1st
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm', // this can be named whatever, just needs to be unique
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// user types something in...record it on application state
/* The following is what happens behind the scenes
state === {
	form: {
		PostsNewForm: {
			title: '....',
			categories: '....',
			content: '....'
		}
	}
}
*/