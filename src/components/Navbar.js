import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = (props) => {
  const { cart } = props;
  const count = cart.reduce((a, b) => a + b.quantity, 0);
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/acougue'>Açougue</NavLink>
        </li>
        <li>
          <NavLink to='/padaria'>Padaria</NavLink>
        </li>
        <li>
          <NavLink to='/hortifruti'>Hortifruti</NavLink>
        </li>
        <li>
          <NavLink to='/laticinios'>Laticinios</NavLink>
        </li>
        <li>
          <NavLink to='/higiene'>Higiene</NavLink>
        </li>
        <li>
          <NavLink to='/limpeza'>Limpeza</NavLink>
        </li>
        <li>
          <NavLink to='/congelados'>Congelados</NavLink>
        </li>
        <li>
          <NavLink to='/bebidas'>Bebidas</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Nossos Produtos</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Carrinho {count > 0 ? `[${count}]` : null}</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
