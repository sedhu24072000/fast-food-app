import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const cart = useSelector(state => state.cart.cart)

  if(cart.length > 0){
    return (
      <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{cart.reduce((acc,e) => Number(e.quantity)+acc,0)} Food</span>
          <span>₹ {cart.reduce((acc,e) => Number(e.price)+acc,0)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
      )
  }else{
    return null
  }

  
}

export default CartOverview;
