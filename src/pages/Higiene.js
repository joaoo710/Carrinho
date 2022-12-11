import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Higiene.css';

const Higiene = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%205.png">
        </img>
        <h2>Higiene</h2>
        <div className='products-list'>
              <ProductCard
                product={products[7]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[7].id}`}
              />
        <ProductCard
                product={products[8]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[8].id}`}
              /> 
        <ProductCard
                product={products[9]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[9].id}`}
              />
        <ProductCard
                product={products[27]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[27].id}`}
              />
        </div>
      </Container>
    </section>
  );
};

export default Higiene;