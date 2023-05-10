import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
    }
    getData();
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0
        ? reviews.map(review => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))
        : 'There is no reviews'}
    </ul>
  );
};

export default Reviews;
