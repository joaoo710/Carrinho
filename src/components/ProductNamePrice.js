import '../css/ProductNamePrice.css';

const ProductNamePrice = (props) => {
  const { name = 'Product name', price = 0.0 } = props;
  return (
    <div className='name-price'>
      <h3>{name}</h3>
      <p>$ {price.toFixed(2)}</p>
    </div>
  );
};

export default ProductNamePrice;
