import { API_KEY } from 'api/api.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export const MovieList = () => {
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
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieListItem title={movie.title} />
        </Link>
      ))}
    </ul>
  );
};
