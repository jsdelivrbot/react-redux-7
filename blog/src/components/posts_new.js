import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	// defines an object on the PostsNew class
	// Try avoiding contexts at all time as it's still in development and can change anytime. Only use with router.  
	static contextTypes = {
		router: PropTypes.object
	};


	// props here are from the form
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate user to index
				// We navigate by calling this.context.router.push with the
				// new path to navigate to.
				this.context.router.push('/');
			});
	}

	render() {
		// below is same as:
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;
		// so on and so forth
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					{/* {...title} destructures the object into its separate keyes and values.  For example: onChange, onBlur, etc. */}
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
					{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
					{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help">
					{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a username';
	}

	if(!values.categories) {
		errors.categories = 'Enter category';
	}

	if(!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

// redux connect and reduxForm do the same thing, but have a different order, reduxForm has the additional config 1st
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm', // this can be named whatever, just needs to be unique
	fields: ['title', 'categories', 'content'],
	validate
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