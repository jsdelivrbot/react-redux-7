import React from 'react';
import ReactDOM from 'react-dom';

// Create new component.  This component should produce some HTML

/* NOTE: "const" is essentially a variable or class that doesn't change.
App will never equal 5 or anything other than the assigned function */
// NOTE: => (fat arrow) is used in place of 'function' and serves an identical purpose.
const App = () => {
	return <div>Hi!</div>; //this is JSX
}


// Take this component's generated HTML and put in on the page (in the Dom)
// NOTE: in JSX using a self-closing tag when there is no content within is valid. Ex: <App />
ReactDOM.render(<App />, document.querySelector('.container'));
