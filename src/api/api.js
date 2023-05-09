import axios from 'axios';
export const API_KEY = `0a0fad420f8b287917c1cf2e9edfaf94`;

export const getMovieById = id => {
  const response = axios
    .get(`movie/${id}?api_key=${API_KEY}`)
    .then(function (response) {
      console.log(response.data);
    });

  return response.data;
};
