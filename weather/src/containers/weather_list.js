import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		// Maps over returned array 'list' passes a function named weather with an argument named weather, which drills down to each temp
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// destructuring: the line below is the same as writing:
		// const lon = cityData.city.coor.lon;
		// const lat = cityData.city.coor.lat;
		// to use this the const names would need to be identical to the properties in the 'coor' object
		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temps} color="red" units="K" />
				</td>
				<td>
					<Chart data={pressures} color="blue" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="green" units="%" />
				</td>
			</tr>
		);
	};

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	};
};

function mapStateToProps({ weather }) {
	return { weather }; // identical to { weather: weather }
};

export default connect(mapStateToProps)(WeatherList);