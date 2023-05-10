import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import {Link} from 'react-router-dom'

export const Movie = () => {
  return (
    <>
      <Link to="/">← Go back</Link>
      <MovieDetails />
    </>
  );
};
