import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/ProductCardControls.css';

const ProductCardControls = (props) => {
  const { addBtn, removeBtn, counter } = props;
  return (
    <div className='card-controls'>
      <button onClick={removeBtn}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <p>{counter}</p>
      <button onClick={addBtn}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ProductCardControls;
