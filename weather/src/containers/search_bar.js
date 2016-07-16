import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	};

	onInputChange(e) {
		this.setState({ term: e.target.value });
	};

	onFormSubmit(e) {
		e.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
		<form onSubmit={this.onFormSubmit} className="input-group">
			<input
				placeholder="Get a five-day forecast in your favorite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//passing null in the first argument because the map dispatch method always comes second
export default connect(null, mapDispatchToProps)(SearchBar);
