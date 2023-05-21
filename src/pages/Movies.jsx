import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
  ]);

  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  //або значення або пустий рядок
  const movieId = searchParams.get('movieId') ?? '';

  const updateQueryString = evt => {
    const movieSearchValue = evt.target.value;
    if (movieSearchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieSearchValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      {visibleMovies.map(movie => {
        return (
          <li key={movie}>
            <Link to={`${movie}`} state={{ from: location }}>
              {movie}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
export default Movies;
