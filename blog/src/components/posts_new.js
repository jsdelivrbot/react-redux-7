import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {
		// below is same as:
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;
		// so on and so forth
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit}>
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

export default reduxForm({
	form: 'PostsNewForm', // this can be named whatever, just needs to be unique
	fields: ['title', 'categories', 'content']
})(PostsNew);

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