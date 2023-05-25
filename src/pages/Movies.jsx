import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api-movies';
import SearchMovies from 'components/Searchbtn/SearchBtn';
import { toast } from 'react-hot-toast';

import {
  StyledSection,
  StyledLink,
  SectionTitle,
  List,
  ListItem,
} from 'components/MovieList/StyledMovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  //або значення або пустий рядок
  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    if (movieId === '' || movieId === null) return;
    const getMovies = async () => {
      try {
        const { results } = await fetchSearchMovies(movieId);
        if (results.length === 0) {
          toast.dismiss(); // очищаємо попереднє сповіщення
          toast.error('No movies found');
          setMovies([]); // очищаємо масив фільмів
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovies();
  }, [movieId]);

  const handleSubmit = movieId => {
    setSearchParams({ movieId });
  };
  // const handleSubmit = evt => {
  //   const movieSearchValue = evt.target.value;
  //   if (movieSearchValue === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieId: movieSearchValue });
  // };

  return (
    <StyledSection>
      {movies.length === 0 && (
        <SectionTitle>Tell me what are you looking for</SectionTitle>
      )}
      <SearchMovies onSubmit={handleSubmit} />
      <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </StyledSection>
  );
};
export default Movies;
