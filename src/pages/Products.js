import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Products = () => {
  return (
    <section>
      <h2>Products</h2>
      <div className='products-list'>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default Products;
