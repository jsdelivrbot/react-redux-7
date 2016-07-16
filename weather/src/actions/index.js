import axios from 'axios';

const API_KEY = '21073b49d414c237262a102db862e8f1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// NOTE: The convention is to create a variable for the type rather than use a string.  This is to prevent bugs and such.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request  //returning promise as payload
	};
};