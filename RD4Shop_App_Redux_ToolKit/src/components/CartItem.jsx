import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slices/cartSlice';
import toast from 'react-hot-toast';

function CartItem({item,itemIndex}) {
    const dispatch = useDispatch();

    const removeFromCart = ()=>{
        dispatch(remove(item.id))
        toast.error("Item Removed Successfully")
    }

  return (
    <div>
      <div>
        <div>
            <img src={item.image} alt="" />
        </div>
        <div>
            <h1>
                {item.title}
            </h1>
            <h1>
                {
                    item.description
                }
            </h1>
            <div>
                <p>
                    {item.price}
                </p>
                <div onClick={removeFromCart}>
                <MdDelete />
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem
