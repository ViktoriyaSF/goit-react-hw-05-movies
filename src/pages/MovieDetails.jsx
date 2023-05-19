import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <>
      <div> MovieDetails :{movieId}</div>
      <ul>
        <li>
          <Link to="cast"> cast ✨</Link>
        </li>
        <li>
          <Link to="reviews"> reviews 💖</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
