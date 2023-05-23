import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '20c3d585cb9b647841132b61ed5a8cd8';
export const IMG_url = 'https://image.tmdb.org/t/p/';

export const fetchTrendingMovies = async () => {
  const queryString = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const fetchSearchMovies = async query => {
  const queryString = `search/movie?query=${query}&api_key=${KEY}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};
export const fetchMovieDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};
export const fetchMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};

export const fetchMovieReviews = async movieId => {
  const queryString = `movie/${movieId}/reviews?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};
