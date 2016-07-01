// NOTE: a container (smart component) is a React Component that has a direct connection to the state produced and managed by Redux

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	};

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	};	
};

// this function is the glue between React and Redux
// NOTE: if our state ever changes, this container will instantly and automatically re-render
function mapStateToProps(state) {
	// whatever is returned will show up as props inside of BookList
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed 
	// to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.  Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);