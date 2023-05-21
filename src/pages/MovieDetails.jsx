import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinLocationkRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  // console.log(movieId);
  console.log(backLinLocationkRef.current);
  console.log(location.state?.from);
  console.log(location);
  return (
    <>
      <div> MovieDetails :{movieId}</div>
      <Link to={backLinLocationkRef.current}>RETURN</Link>
      <ul>
        <li>
          <Link to="cast"> cast ✨</Link>
        </li>
        <li>
          <Link to="reviews"> reviews 💖</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
