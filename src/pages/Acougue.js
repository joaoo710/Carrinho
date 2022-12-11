import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Acougue.css';

const Acougue = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%20%201.png"        >
        </img>
        <h2>Açougue</h2>
        <div className='products-list'>
              <ProductCard
                product={products[5]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[5].id}`}
              />
        <ProductCard
                product={products[6]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[6].id}`}
              />
        <ProductCard
                product={products[25]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[25].id}`}
              />
        <ProductCard
                product={products[26]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[26].id}`}
              />
        </div>
      </Container>
    </section>
  );
};

export default Acougue;