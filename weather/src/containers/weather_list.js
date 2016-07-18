import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		// Maps over returned array 'list' passes a function named weather with an argument named weather, which drills down to each temp
		const temps = cityData.list.map(weather => weather.main.temp);

		return(
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
			</tr>
		)
	};

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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