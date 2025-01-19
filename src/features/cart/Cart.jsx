import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';




function Cart() {
  const cartItem = useSelector(state => state.cart.cart)
  const userName = useSelector(state => state.user.username)
  const cart = cartItem;
  
  const dispatch = useDispatch()
  const handleClear = () =>{
    dispatch(clearCart())
  }

  return (
    <>
    {cart.length > 0 ? (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item,i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order Food
        </Button>

        <Button type="secondary" onClick={handleClear}>Clear cart</Button>
      </div>
    </div>) : (<EmptyCart></EmptyCart>)}
    </>

  );
}

export default Cart;
