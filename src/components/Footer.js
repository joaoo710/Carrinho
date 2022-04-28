import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='site-info'>
          <p className='title'>Stinson Style</p>
          <p className='slogan'>Making you look awesome since 2005</p>
        </div>
        <div className='author-info'>
          <p className='template-info'>
            This is a fake store website developed with the purpose of
            practicing web development skills
          </p>
          <div className='author'>
            <p>Adriel Faria, {new Date().getFullYear()}</p>
            <div className='links'>
              <a
                href='https://github.com/br-adriel/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href='https://www.linkedin.com/in/adriel-fsantos/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
