import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Movie = () => {
  const location = useLocation();
  const backLinkHref = (location.state) ? location.state.from : '/movies';

  return (
    <>
      <Link to={backLinkHref}>← Back</Link>
      <MovieDetails />
    </>
  );
};

export default Movie;
