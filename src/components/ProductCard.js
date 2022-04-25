import { useState } from 'react';
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
  } = props;
  const [quantity, setQuantity] = useState(0);

  const addProduct = (product) => {
    setQuantity((prevState) => {
      const qt = prevState + 1;
      addToCart({ ...product, quantity: qt });
      return qt;
    });
  };

  const removeProduct = (product) => {
    setQuantity((prevState) => {
      const qt = prevState - 1;
      if (prevState > 0) {
        addToCart({ ...product, quantity: qt });
        return qt;
      }
      return prevState;
    });
  };

  const cssClasses = ['product-card', horizontal ? 'horizontal' : null];
  return (
    <Card classes={cssClasses}>
      <img src={product.img} alt={product.name} />
      <div className='bottom'>
        {total ? (
          <ProductNamePrice
            name={product.name}
            price={product.price * quantity}
          />
        ) : (
          <ProductNamePrice name={product.name} price={product.price} />
        )}
        <ProductCardControls
          addBtn={addProduct}
          removeBtn={removeProduct}
          counter={quantity}
          full={fullControls}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
