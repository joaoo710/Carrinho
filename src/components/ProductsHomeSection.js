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
        <h2>Most popular</h2>
        <div className='products'>
          <ProductCard
            product={products[1]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[1].id}`}
          />
          <ProductCard
            product={products[4]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[4].id}`}
          />
          <ProductCard
            product={products[10]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[10].id}`}
          />
        </div>
        <Link to='/products'>Check more products...</Link>
      </Container>
    </section>
  );
};

export default ProductsHomeSection;
