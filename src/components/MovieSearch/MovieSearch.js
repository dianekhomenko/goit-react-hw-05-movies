import { API_KEY } from 'api/api.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Link } from 'react-router-dom';

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/search/movie?api_key=${API_KEY}&query=${search}`
      );
      setMovies(response.data.results);
    }
    getData();
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(e.currentTarget.elements.searchbar.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="searchbar" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieListItem title={movie.title} />
          </Link>
        ))}
      </ul>
    </>
  );
};
