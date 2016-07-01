// State argument is not application state, only the state
// this reducer is responsible for
// NOTE: 'state = null' is ES6 syntax for 'if argument is undefined, return null'
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}