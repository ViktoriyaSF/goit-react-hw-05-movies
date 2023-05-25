import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api-movies';
import { ReviewsContainer, Title, Items, Text } from './StyledReviews';

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
    <ReviewsContainer>
      {reviews.length !== 0 && <Title>Reviews</Title>}
      {reviews.length === 0 ? (
        <h2>We don't have any reviews for this movie yet</h2>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <Items>Author: {review.author}</Items>
                <Text>{review.content}</Text>
              </li>
            );
          })}
        </ul>
      )}
    </ReviewsContainer>
  );
};
export default Reviews;
