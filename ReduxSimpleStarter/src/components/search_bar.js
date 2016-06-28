// NOTE:  import react into any and all project files that use JSX
import React, { Component } from 'react';

// whenever you create a class you must render JSX or it will error
class SearchBar extends Component {
	render() {
		return <input onChange={(event) => console.log(event.target.value)} />;
	}
}

export default SearchBar;

