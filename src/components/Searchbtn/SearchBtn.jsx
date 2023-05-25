import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Form, Input, Button } from './StyledSearchBtn';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault(); // відміняємо стандартну поведінку браузера

    const query = e.target.elements.query.value; // додаємо доступ до значення поля пошуку

    // додаємо перевірку на наявність значення в полі пошуку
    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query); // додаємо функціонал для пошуку фільмів
    e.target.reset(); // очищаємо поле пошуку
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchMovies;

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

// const updateQueryString = evt => {
//   const movieSearchValue = evt.target.value;
//   if (movieSearchValue === '') {
//     return setSearchParams({});
//   }
//   setSearchParams({ movieId: movieSearchValue });
// };
