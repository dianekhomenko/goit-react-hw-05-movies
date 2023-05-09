import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);

  return (
    <>
      {movieId}
      info: {movie}
    </>
  );
};
