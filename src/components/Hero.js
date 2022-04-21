import Container from './Container';

const Hero = (props) => {
  return (
    <div className='hero' style={{ backgroundImage: `url(${props.image})` }}>
      <div className='gradient'>
        <Container>
          {props.title !== '' ? <h2>{props.title}</h2> : null}
          {props.text !== '' ? <p>{props.text}</p> : null}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
