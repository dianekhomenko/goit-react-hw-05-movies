import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Movie = () => {
  const location = useLocation();
  const backLinkHref = location.state.from ?? '/movies';

  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      <MovieDetails />
    </>
  );
};
