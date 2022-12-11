import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Congelados.css';

const Congelados = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%207.png"        >
        </img>
        <h2>Congelados</h2>
        <div className='products-list'>
              <ProductCard
                product={products[17]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[19].id}`}
              />
        <ProductCard
                product={products[18]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[18].id}`}
              />
        <ProductCard
                product={products[30]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[30].id}`}
              />
        <ProductCard
                product={products[31]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[31].id}`}
              />

        </div>
      </Container>
    </section>
  );
};

export default Congelados;