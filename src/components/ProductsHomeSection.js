import products from '../data/products';
import Container from './Container';
import ProductCard from './ProductCard';
import '../css/ProductsHomeSection.css';
import { Link } from 'react-router-dom';

const ProductsHomeSection = (props) => {
  const { addToCart, cart } = props;

  return (
    <section className='products-section'>
      <Container>
        <h2>Mais vendidos</h2>
        <div className='products'>
          <ProductCard
            product={products[17]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[17].id}`}
          />
          <ProductCard
            product={products[4]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[4].id}`}
          />
          <ProductCard
            product={products[11]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[11].id}`}
          />
        </div>
        <Link to='/products'>Veja todos nossos produtos...</Link>
      </Container>
    </section>
  );
};

export default ProductsHomeSection;
