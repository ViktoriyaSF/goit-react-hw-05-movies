import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/api-movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // const location = useLocation();

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
      {error && (
        <h2>
          Sorry, we could not fetch the trending movies. Please try again later
        </h2>
      )}
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </>
  );
};
export default Home;

// useEffect(() => {
//   const getMovies = async () => {
//     try {
//       setIsLoading(true);
//       setError(false);
//       const { results } = await fetchTrendingMovies();
//       // console.log(results);
//       setMovies(results);
//     } catch (error) {
//       setError('sorry');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   getMovies();
// }, []);
