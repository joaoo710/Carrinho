import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../components/Container';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='site-info'>
          <p className='title'>Smart Cart</p>
          <p className='slogan'>Inovando suas compras desde 2022</p>
        </div>
        <div className='author-info'>
          <p className='template-info'>
           Esse é um site feito pelos alunos do grupo 6 da turma T4EE, com o auxílio do professor Marcio Natal Lopes </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
