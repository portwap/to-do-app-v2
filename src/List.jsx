import { useGlobalContext } from './context';
import SingleItem from './SingleItem';

const List = () => {
  const { list } = useGlobalContext();
  return (
    <div className='list'>
      {list.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
