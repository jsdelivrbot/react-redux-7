import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// YouTube API key
const API_KEY = 'AIzaSyCATEQ8h-V4beHQrgUo9Swcs_6q7oNUxT4';

// Create new component.  This component should produce some HTML - ALWAYS ONE COMPONENT PER FILE!

/* NOTE: "const" is essentially a variable or class that doesn't change.
App will never equal 5 or anything other than the assigned function */
// NOTE: => (fat arrow) is used in place of 'function' and serves an identical purpose.
// NOTE: When using multi-line JSX the common practice is to wrap in parentheses
const App = () => {
	return (
		<div>
			<SearchBar />
		</div> //this is JSX
	);
};


// Take this component's generated HTML and put in on the page (in the Dom)
// NOTE: in JSX using a self-closing tag when there is no content within is valid. Ex: <App />
ReactDOM.render(<App />, document.querySelector('.container'));
