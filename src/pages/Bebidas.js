import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Bebidas.css';

const Bebidas = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%208.png"        >
        </img>
        <h2>Bebidas</h2>
        <div className='products-list'>
              <ProductCard
                product={products[10]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[10].id}`}
              />
        

        <ProductCard
                product={products[11]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[11].id}`}
              />

        <ProductCard
                product={products[12]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[12].id}`}
              />

        <ProductCard
                product={products[20]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[20].id}`}
              />
        </div>
      </Container>
    </section>
  );
};

export default Bebidas;