import { useParams } from 'react-router-dom';

const Product = (props) => {
  const params = useParams();
  return <div>Product #{params.productId}</div>;
};

export default Product;
