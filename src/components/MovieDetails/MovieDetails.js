import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getMovieById} from 'api/api'

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

  return (
    <>
      {movieId}
      info: {movie.title}
    </>
  );
};
