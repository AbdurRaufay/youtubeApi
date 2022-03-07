import axios from "axios";
const KEY = "AIzaSyDTcDrm3U07azAxtdwUIJUpumjq5YTfNJY";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
