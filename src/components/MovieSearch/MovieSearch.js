import { API_KEY } from 'api/api.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Link } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchText !== '') {
      async function getData() {
        const response = await axios.get(
          `/search/movie?api_key=${API_KEY}&query=${searchText}`
        );
        setMovies(response.data.results);
      }
      getData();
    }
  }, [searchText]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateQueryString(e.currentTarget.elements.searchbar.value);
  };
  const location = useLocation();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="searchbar" />
        <button type="submit">Search</button>
      </form>
      {searchText && (
        <p>
          You searched for <b>{searchText}</b>
        </p>
      )}
      <ul>
        {movies.map(movie => (
          <Link
            to={`/goit-react-hw-05-movies/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
          >
            <MovieListItem title={movie.title} />
          </Link>
        ))}
      </ul>
    </>
  );
};
