import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { updateItemDec, updateItemInc } from './cartSlice';

function UpdateItem({food, quantity}){
    const dispatch = useDispatch()
    const obj ={
        name:food
    }
    const handleDecrease =() =>{
        dispatch(updateItemDec(obj))
    }
    const handleIncrease =() =>{
        dispatch(updateItemInc(obj))
    }
    return(
        <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="small"
        onClick={handleDecrease}
      >
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button
        type="small"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
    )
}

export default UpdateItem