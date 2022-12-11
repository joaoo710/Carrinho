import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Limpeza.css';

const Limpeza = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%206.png"        >
        </img>
        <h2>Limpeza</h2>
        <div className='products-list'>
              <ProductCard
                product={products[13]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[13].id}`}
              />
        <ProductCard
                product={products[14]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[14].id}`}
              />
        <ProductCard
                product={products[28]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[28].id}`}
              />
        <ProductCard
                product={products[29]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[29].id}`}
              /> 

        </div>
      </Container>
    </section>
  );
};

export default Limpeza;