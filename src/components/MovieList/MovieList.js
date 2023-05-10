import { API_KEY } from 'api/api.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
      setMovies(response.data.results);
    }
    getData();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          state={{ from: location }}
        >
          <MovieListItem title={movie.title} />
        </Link>
      ))}
    </ul>
  );
};
