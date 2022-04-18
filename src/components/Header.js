import Container from './Container';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Container>
        <Link to='/'>
          <h1>Stinson Style</h1>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
