import PropTypes from 'prop-types';
import { IMG_url } from '../../service/api-movies.js';
import noFilm from '../../img/noFilm.jpg';
import {
  MovieContainer,
  MovieInfo,
  MoreInfoWrapper,
  MovieTitle,
  MovieItems,
  MovieText,
  List,
  ListItem,
} from './StyledMovieCard.jsx';
import { Link } from 'react-router-dom';

const MovieCard = ({ movieDetails }) => {
  const score = Math.round(movieDetails.vote_average * 10);
  return (
    <>
      <MovieContainer>
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
        <MovieInfo>
          <MovieTitle>{movieDetails.title || movieDetails.name}</MovieTitle>
          {score ? (
            <MovieText>User Score: {score}%</MovieText>
          ) : (
            <MovieText>User Score:no information </MovieText>
          )}
          <MovieItems>Overview</MovieItems>
          <MovieText>{movieDetails.overview}</MovieText>
          <MovieItems>Genres</MovieItems>
          <MovieText>
            {movieDetails.genres.map(genre => genre.name).join(' / ')}
          </MovieText>
        </MovieInfo>
      </MovieContainer>
      <MoreInfoWrapper>
        <MovieTitle>Additional information</MovieTitle>
        <List>
          <ListItem>
            <Link to="cast"> cast ✨</Link>
          </ListItem>
          <ListItem>
            <Link to="reviews"> reviews 💖</Link>
          </ListItem>
        </List>
      </MoreInfoWrapper>
    </>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }).isRequired,
};
