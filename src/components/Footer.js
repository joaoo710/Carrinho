
import Container from '../components/Container';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='site-info'>
          <a href='https://react-to-do-delta.vercel.app/'>
          <p className='title'>Lista de Compras</p> 
          </a>
          <p className='slogan'>Inovando suas compras desde 2022</p>
        </div>
        <div className='author-info'>
          <p className='template-info'>
           Esse é um site desenvolvido pelos alunos do grupo 6 da turma T4EE, com o auxílio do professor Marcio Natal Lopes </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
