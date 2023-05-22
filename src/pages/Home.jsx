import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/api-movies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();
      // console.log(results);
      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title || movie.name}</Link>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};
export default Home;
