import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import UpdateItem from './updateCart';
import { handleDel } from './cartSlice';

function CartItem({ item }) {
  const { name, quantity, price } = item;
  const dispatch = useDispatch()
  const handleDelete =() =>{
    const obj = {
      name
    }
    dispatch(handleDel(obj))
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{price}</p>
        <UpdateItem quantity={quantity} food={name}></UpdateItem>
        <Button type="small" onClick={handleDelete}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
