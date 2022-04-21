import Container from './Container';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Container>
        <Link to='/'>
          <h1>Stinson Style</h1>
        </Link>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
