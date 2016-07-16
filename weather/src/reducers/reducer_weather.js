import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        	// never manipulate state directly
            return [action.payload.data, ...state]; // result [city, city, city] NOT [city, [city, city]]
    }

    return state;
}
