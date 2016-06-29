import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API key
const API_KEY = 'AIzaSyCATEQ8h-V4beHQrgUo9Swcs_6q7oNUxT4';

// Create new component.  This component should produce some HTML - ALWAYS ONE COMPONENT PER FILE!

/* NOTE: "const" is essentially a variable or class that doesn't change.
App will never equal 5 or anything other than the assigned function */
// NOTE: => (fat arrow) is used in place of 'function' and serves an identical purpose.
// NOTE: When using multi-line JSX the common practice is to wrap in parentheses
// NOTE: This is a functional component.  These are used when taking in info and spitting out JSX
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// in ES6 when the name of the key is the same as the value, you can use just 'videos' rather than 'videos: videos'
			// this.setState({ videos });
			// resolves to this.setState({videos: videos}) - only works when key and value/property are identically named
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	};

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={ this.state.videos } />
			</div> //this is JSX
		);
	};
};

// Take this component's generated HTML and put in on the page (in the Dom)
// NOTE: in JSX using a self-closing tag when there is no content within is valid. Ex: <App />
ReactDOM.render(<App />, document.querySelector('.container'));
