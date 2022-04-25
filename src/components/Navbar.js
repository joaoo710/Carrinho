import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = (props) => {
  const { cart } = props;
  const cartCount = cart.reduce((p1, p2) => p1.quantity + p2.quantity, {
    quantity: 0,
  });
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            Cart {cartCount > 0 ? `[${cartCount}]` : null}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
