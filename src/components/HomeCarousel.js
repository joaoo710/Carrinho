import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from '../components/Hero';
import hero1 from '../img/hero/1.jpg';
import hero2 from '../img/hero/2.jpg';
import hero3 from '../img/hero/3.jpg';

const HomeCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      effect='fade'
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, EffectFade]}
    >
      <SwiperSlide>
        <Hero
          title='NEW COLLECTION'
          text='Glasses and shirts that will make your summer look even more awesome'
          heroCss={{
            backgroundImage: `url(${hero1})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(45deg, rgb(109, 142, 173, 0.5), rgba(0, 0, 0, 0))',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Hero
          title='Casual 83 Collection'
          text="It's not a suit, but you can still look 83% awesome with it"
          posRight={true}
          heroCss={{
            backgroundImage: `url(${hero2})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(135deg, rgba(0, 0, 0, 0), rgb(121, 169, 171, 0.5))',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Hero
          title='Suit up!'
          text='Check our new line of suits and ties to always look legendary'
          heroCss={{
            backgroundImage: `url(${hero3})`,
            backgroundPositionX: 'right',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousel;
