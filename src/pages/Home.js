import HomeCarousel from '../components/HomeCarousel';
import ProductsHomeSection from '../components/ProductsHomeSection';

const Home = (props) => {
  const { addToCart } = props;
  return (
    <section>
      <HomeCarousel />
      <ProductsHomeSection addToCart={addToCart} />
    </section>
  );
};

export default Home;
