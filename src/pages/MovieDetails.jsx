import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api-movies';
import MovieCard from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { FiChevronsLeft } from 'react-icons/fi';
import { BtnUp } from 'components/BtnUP/BtnUp';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLinLocationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      const results = await fetchMovieDetails(movieId);
      setMovieDetails(results);
      setIsLoading(false);
    };
    getDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinLocationRef.current}>
        <button type="button">
          <FiChevronsLeft size="1.25em" />
          Go back
        </button>
      </Link>
      <BtnUp />
      {isLoading && <Loader />}
      {movieDetails.length !== 0 && <MovieCard movieDetails={movieDetails} />}
      {!movieDetails && <div>This movie is not found</div>}

      <Suspense fallback={<h2>Loading subpage...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
