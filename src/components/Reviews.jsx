import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api-movies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const { results } = await fetchMovieReviews(movieId);
      setReviews(results);
    };
    getReviews();
  }, [movieId]);
  // console.log(reviews);

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie yet</p>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Reviews;
