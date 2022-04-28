import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Products.css';

const Products = () => {
  return (
    <section id='products-page'>
      <Container>
        <h2>Products</h2>
        <div className='products-list'>
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Products;
