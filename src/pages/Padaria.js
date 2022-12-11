import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Padaria.css';

const Padaria = (props) => {
  const { addToCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <img class="map" src="https://raw.githubusercontent.com/joaoo710/Smart-Cart/master/assets/Corredor%202.png"        >
        </img>
        <h2>Padaria</h2>
        <div className='products-list'>
              <ProductCard
                product={products[15]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[15].id}`}
              />
        

        <ProductCard
                product={products[16]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[16].id}`}
              />
        
        <ProductCard
                product={products[19]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[19].id}`}
              />
        <ProductCard
                product={products[21]}
                cart={cart}
                addToCart={addToCart}
                hasLink={true}
                link={`products/${products[21].id}`}
              />

        </div>
      </Container>
    </section>
  );
};

export default Padaria;