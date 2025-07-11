import axios from 'axios';

// Change this URL if your backend runs on a different port or path
const API_URL = 'http://localhost:8080/api/golfscores';

export function fetchGolfScores() {
  return axios.get(API_URL);
}
