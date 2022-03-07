import { Component } from "react";
import Search from "./Search";
import youTube from "../apis/ApiKey";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("birds");
	}
	onTermSubmit = async (term) => {
		const response = await youTube.get("/search", {
			params: {
				q: term,
			},
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<Search onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail
								video={this.state.selectedVideo}
							/>
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
