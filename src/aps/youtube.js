import axios from 'axios';
const KEY = 'AIzaSyBGWsd5dvYPFyiZVUld8ew6K6cfw566gwI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});


