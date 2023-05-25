import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'service/api-movies';
import { ReviewsContainer, Title, Items, Text } from './StyledReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      const { results } = await fetchMovieReviews(movieId);
      setReviews(results);
      setIsLoading(false);
    };
    getReviews();
  }, [movieId]);
  console.log(!reviews);

  return (
    <ReviewsContainer>
      {isLoading && <Loader />}
      {reviews.length !== 0 && <Title>Reviews</Title>}
      {reviews.length !== 0 && (
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
      {!reviews && <h2>We don't have any reviews for this movie yet</h2>}
    </ReviewsContainer>
  );
};
export default Reviews;
