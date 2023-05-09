import { API_KEY } from 'api/api.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';

axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get();
      setMovies(response.data.results);
    }
    getData();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <MovieListItem key={movie.id} title={movie.title} />
      ))}
    </ul>
  );
};
