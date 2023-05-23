import { StyledLoader } from 'components/Loader/StyledLoader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/api-movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setError(false);
      const { results } = await fetchTrendingMovies();
      // console.log(results);
      setMovies(results);
      setIsLoading(false);
    };

    getMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <StyledLoader />
      ) : error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <MovieList movies={movies} state={{ from: location }} />
      )}
      {/* <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
export default Home;
