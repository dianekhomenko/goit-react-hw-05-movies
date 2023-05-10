import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';
import { useEffect, useState } from 'react';
import { CastBlock, CastMember } from './MovieDetails.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getMovieCast(movieId);
      setCast(data.cast);
    }
    getData();
  }, [movieId]);

  return (
    <CastBlock>
      {cast.map(member => (
        <CastMember key={member.id}>
          {member.profile_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${member.profile_path}`}
              alt={member.name}
              height="150"
            />
          ) : (
            ''
          )}
          <h5>{member.name}</h5>
          <p>Character: {member.character}</p>
        </CastMember>
      ))}
    </CastBlock>
  );
};
