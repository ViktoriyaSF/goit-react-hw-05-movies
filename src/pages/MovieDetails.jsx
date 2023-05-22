import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails, IMG_url } from 'service/api-movies';
import noFilm from '../img/noFilm.jpg';

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
  console.log(movieDetails);
  return (
    <>
      <Link to={backLinLocationRef.current}>Go bac</Link>
      {movieDetails.length === 0 ? (
        <div>This movie is not found</div>
      ) : (
        <div>
          <img
            src={
              movieDetails.poster_path
                ? IMG_url + 'w300' + movieDetails.poster_path
                : noFilm
            }
            width="300"
            height="450"
            alt={movieDetails.title}
          ></img>
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
