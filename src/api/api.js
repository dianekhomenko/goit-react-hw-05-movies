import axios from 'axios';
export const API_KEY = `0a0fad420f8b287917c1cf2e9edfaf94`;

export const getMovieById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
};
