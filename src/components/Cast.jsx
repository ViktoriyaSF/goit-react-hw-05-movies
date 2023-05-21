import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  return <div>Cast {movieId}</div>;
};

export default Cast;

// export const Searchbar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchQuery = evt => {
//     const { value } = evt.currentTarget;
//     setSearchQuery(value.toLowerCase().trim());
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     onSearch(searchQuery);
//     setSearchQuery('');
//   };
// const handleSubmit = e => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   console.log(form);
//   setSearchParams({ query: form.elements.query.value });
//   form.reset();
// };
