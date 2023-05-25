import { NavLink } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import not_found from '../img/not_found.jpg';
const NotFound = () => {
  return (
    <>
      <NavLink to="/">
        <button type="button">
          <FiChevronsLeft size="1.25em" />
          Go home
        </button>
      </NavLink>
      <img src={not_found} width="100%" height="90%" alt="not found" />
    </>
  );
};
export default NotFound;
