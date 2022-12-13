import { Link } from 'react-router-dom';
import '../css/CartNoProductsMsg.css';

const CartNoProductsMsg = () => {
  return (
    <div className='cart-no-products'>
      <h3>Você ainda não adicionou nenhum produto em seu carrinho</h3>
      <Link to='/products'>Veja nossos produtos</Link>
    </div>
  );
};

export default CartNoProductsMsg;
