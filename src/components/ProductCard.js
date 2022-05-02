import Card from './Card';
import ProductCardControls from './ProductCardControls';
import ProductNamePrice from './ProductNamePrice';
import '../css/ProductCard.css';

const ProductCard = (props) => {
  const {
    product,
    total = false,
    addToCart,
    horizontal = false,
    fullControls = false,
    removeFromCart,
    cart,
  } = props;

  const getQuantity = (id) => {
    if (cart.some((item) => item.id === id)) {
      return cart.filter((item) => item.id === id)[0].quantity;
    }
    return 0;
  };

  const cssClasses = ['product-card', horizontal ? 'horizontal' : null];

  return (
    <Card classes={cssClasses}>
      <img src={product.img} alt={product.name} />
      <div className='bottom'>
        {total ? (
          <ProductNamePrice
            name={product.name}
            price={product.price * getQuantity(product.id)}
          />
        ) : (
          <ProductNamePrice name={product.name} price={product.price} />
        )}
        <ProductCardControls
          addBtn={() => addToCart(product)}
          removeBtn={() => removeFromCart(product)}
          counter={getQuantity(product.id)}
          full={fullControls}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
