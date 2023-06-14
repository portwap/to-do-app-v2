import { FaEdit, FaTrash, FaStrikethrough, FaBold } from 'react-icons/fa';
import { useGlobalContext } from './context';

const SingleItem = ({ item }) => {
  const { removeItem, strikeText, boldText, editItem } = useGlobalContext();

  return (
    <div className='single-item'>
      <p className={`title ${item.strikethrough && 'strikethrough-text'} ${item.bold && 'bold-text'}`}>{item.title}</p>
      <div className='btn-container'>
        <button type='button' className='edit-btn' onClick={() => editItem(item.id)}>
          <FaEdit />
        </button>
        <button type='button' className='strikethrough-btn' onClick={() => strikeText(item.id, item.strikethrough)}>
          <FaStrikethrough />
        </button>
        <button type='button' className='bold-btn' onClick={() => boldText(item.id, item.bold)}>
          <FaBold />
        </button>
        <button type='button' className='delete-btn' onClick={() => removeItem(item.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
