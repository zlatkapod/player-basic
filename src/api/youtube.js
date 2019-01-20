import axios from 'axios';

const KEY = "AIzaSyDV00mRO5wpxo_B6WHyBLHk0BcKFGZS3sw";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default axios.create(
    {
        baseURL: BASE_URL,
        params: {
            part: "snippet",
            maxResults: 5,
            key: KEY
        }
    }
)
