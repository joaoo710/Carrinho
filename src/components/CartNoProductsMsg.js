import { Link } from 'react-router-dom';
import '../css/CartNoProductsMsg.css';

const CartNoProductsMsg = () => {
  return (
    <div className='cart-no-products'>
      <h3>You didn't add any items to your shopping cart yet</h3>
      <Link to='/products'>Check our products</Link>
    </div>
  );
};

export default CartNoProductsMsg;
