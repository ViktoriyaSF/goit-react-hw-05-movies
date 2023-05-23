import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import {
  StyledSection,
  StyledLink,
  SectionTitle,
  List,
  ListItem,
} from './StyledMovieList';

const MovieList = ({ movies }) => {
  return (
    <StyledSection>
      <SectionTitle>Trending today</SectionTitle>

      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
