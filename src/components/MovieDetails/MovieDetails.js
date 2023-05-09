import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'api/api';
import { Link, Outlet } from 'react-router-dom';

const calculateUserScore = rating => {
  return rating * 10;
};

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    async function getData() {
      const data = await getMovieById(movieId);
      setMovie(data);
    }
    getData();
  }, [movieId]);

  const userScore = Math.round(calculateUserScore(movie.vote_average));

  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.title}
          height="400"
        />
        <p>User score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movie.genres?.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Additional information</h4>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
};
