import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Laticinios.css';

const Laticinios = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%204.png"        >
        </img>
        <h2>Laticínios</h2>
        <div className='products-list'>
              <ProductCard
                product={products[2]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[2].id}`}
              />
        

        <ProductCard
                product={products[3]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[3].id}`}
              />
        <ProductCard
                product={products[4]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[4].id}`}
              />
        <ProductCard
                product={products[24]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[24].id}`}
              />
        </div>
      </Container>
    </section>
  );
};

export default Laticinios;