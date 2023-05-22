import { NavLink } from 'react-router-dom';
import not_found from '../img/not_found.jpg';
const NotFound = () => {
  return (
    <>
      <NavLink to="/">Go home</NavLink>
      <img src={not_found} width="100%" height="80%" alt="not found" />
    </>
  );
};
export default NotFound;
