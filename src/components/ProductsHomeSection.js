import products from '../data/products';
import Container from './Container';
import ProductCard from './ProductCard';
import '../css/ProductsHomeSection.css';
import { Link } from 'react-router-dom';

const ProductsHomeSection = (props) => {
  const { addToCart } = props;
  return (
    <section className='products-section'>
      <Container>
        <h2>Most popular</h2>
        <div className='products'>
          <ProductCard product={products[1]} addToCart={addToCart} />
          <ProductCard product={products[4]} addToCart={addToCart} />
          <ProductCard product={products[10]} addToCart={addToCart} />
        </div>
        <Link to='/products'>Check more products...</Link>
      </Container>
    </section>
  );
};

export default ProductsHomeSection;
