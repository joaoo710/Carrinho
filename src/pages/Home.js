import React from 'react';
import hero1 from '../img/hero/1.jpg';
import Hero from '../components/Hero';

const Home = (props) => {
  return (
    <section>
      <Hero
        title='Titulo um'
        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero.'
        heroCss={{
          backgroundImage: `url(${hero1})`,
          backgroundPositionX: 'center',
          backgroundPositionY: 'center',
          color: '#fff',
        }}
        gradientCss={{
          background: 'linear-gradient(45deg, #6d8eadbb, rgba(0, 0, 0, 0))',
        }}
      />
    </section>
  );
};

export default Home;
