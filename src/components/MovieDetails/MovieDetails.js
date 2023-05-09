import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
      const { movieId } = useParams();

    return <>{movieId}</>;
}