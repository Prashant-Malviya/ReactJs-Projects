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
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <div className='h-[300px] p-5 m-5'>
            <img src={item.image} alt="" className='w-full h-full'/>
        </div>
        <div className='p-5 m-5'>
            <h1 className='font-bold text-xl'>
                {item.title}
            </h1>
            {/* <h1>
                {
                    item.description
                }
            </h1> */}
             <p className='text-gray-400 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            <div className='flex flex-row justify-between p-5 m-5'>
                <p className='font-bold text-green-700'>
                    ${item.price}
                </p>
                <div onClick={removeFromCart}
                className='rounded-full h-10 w-10 flex bg-red-300 justify-center items-center'
                >
                <MdDelete />
                </div>
            </div>

            <div className='bg-black w-full h-0.5'></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
