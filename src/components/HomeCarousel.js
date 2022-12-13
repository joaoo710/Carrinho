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
          title='NOVO PRODUTO'
          text='Os melhores doces caseiros de Jundiaí e região você encotra aqui, na nossa Padaria!'
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
          title='PROMOÇÃO'
          text="Whisky Jack Daniels de Maçã Verde por apenas $144,97!!"
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
          title='Natal já esta aí'
          text='Com o natal chegando, venha comprar o novo chotone da Lindt, não vai se arrepender'
          heroCss={{
            backgroundImage: `url(${hero3})`,
            backgroundPositionX: 'right',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(45deg, rgba(68, 45, 39, 0.5), rgba(0, 0, 0, 0))',
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousel;
