import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Hortifruti.css';

const Hortifruti = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%203.png"        >
        </img>
        <h2>Hortifruti</h2>
        <div className='products-list'>
              <ProductCard
                product={products[0]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[0].id}`}
              />
              <ProductCard
                product={products[22]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[1].id}`}
              />
              <ProductCard
                product={products[23]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[1].id}`}
              />
              <ProductCard
                product={products[1]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[1].id}`}
              />
        </div>
      </Container>
    </section>
  );
};

export default Hortifruti;