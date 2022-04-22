import Container from './Container';
import '../css/Hero.css';

const Hero = (props) => {
  const { title, text, heroCss = {}, gradientCss = {} } = props;
  return (
    <div className='hero' style={heroCss}>
      <div className='gradient' style={gradientCss}>
        <Container>
          {props.title !== '' ? <h2>{title}</h2> : null}
          {props.text !== '' ? <p>{text}</p> : null}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
