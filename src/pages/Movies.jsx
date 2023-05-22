import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api-movies';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  // console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  //або значення або пустий рядок
  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    if (movieId === '' || movieId === null) return;
    const getMovies = async () => {
      const { results } = await fetchSearchMovies(movieId);
      console.log(results);
      setMovies(results);
    };

    getMovies();
  }, [movieId]);

  const updateQueryString = evt => {
    const movieSearchValue = evt.target.value;
    if (movieSearchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieSearchValue });
  };
  // console.log(movieId);

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
export default Movies;
