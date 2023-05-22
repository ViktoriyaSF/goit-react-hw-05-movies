import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/api-movies';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);

  const location = useLocation();
  const backLinLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const getDetails = async () => {
      const results = await getMovieDetails(movieId);
      setMovieDetails(results);
    };
    getDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinLocationRef.current}>Go bac</Link>
      {movieDetails.length === 0 ? (
        <div>This movie is not found</div>
      ) : (
        <div>
          {movieDetails.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.title}
            ></img>
          ) : (
            <img
              src={`https://via.placeholder.com/300x400?text=No+Image`}
              alt={movieDetails.title}
            ></img>
          )}
          <div>
            <h2>{movieDetails.title || movieDetails.name}</h2>
            <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(genre => genre.name).join(' / ')}</p>
          </div>
        </div>
      )}

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
