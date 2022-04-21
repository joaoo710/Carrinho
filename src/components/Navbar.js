import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
