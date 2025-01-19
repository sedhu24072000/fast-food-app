import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { createItem, handleDel } from '../cart/cartSlice';

function MenuItem({ food }) {
  const { name, price, ingredients, soldOut, photoName } = food;
  const cart = useSelector(state => state.cart.cart)
  const isInCart = cart.findIndex(e => e.name === name)
  const dispatch =useDispatch()

  const handleSubmit =() =>{
    const obj={
      name,
      price,
      quantity:1,
    }
    dispatch(createItem(obj))
  }

  const handleRemove = () =>{
    const obj = {
          name
        }
        dispatch(handleDel(obj))
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={photoName}
        alt={name}
        className={`h-24 w-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{price}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart !== -1 && <Button type='small' onClick={handleRemove}>Remove cart</Button>}

          {isInCart === -1 && <Button type="small"  onClick={handleSubmit}>Add to cart</Button>}

          
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
