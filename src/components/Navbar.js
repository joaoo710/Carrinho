import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            Cart {props.cartCount > 0 ? `[${props.cartCount}]` : null}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
