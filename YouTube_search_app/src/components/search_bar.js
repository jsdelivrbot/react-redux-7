// NOTE:  import react into any and all project files that use JSX
import React, { Component } from 'react';

// whenever you create a class you must render JSX or it will error
// NOTE:  'state' is a plain JS object that is used to record and react to user events
// NOTE:  each class based component, only class based components, has its own 'state' object.  Change of state forces the class component and its children to re-render.
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	};

	render() {
		return (
			<div className="search-bar">
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	};

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	};
};

export default SearchBar;

