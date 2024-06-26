import React from 'react'
import { AiOutlinePlus,  AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromcart } from '../Redux/slices/Cartslices';
const Itemcard = ({img, price, name, id, qty}) => {
  const dispatch = useDispatch((state)=>state.cart.cart)
  return (
    <div className='flex gap-2 shadow-md'>
      <MdDelete onClick={()=>dispatch(removeFromcart({name,price,img,id,qty}))} className='absolute right-7 text-gray-600'/>
       <img src={img} alt="" className='w-[50px] h-[50px]' />
       <div>
        <h2>{name}</h2>
        <div className='flex justify-between'>
            <span>₹{price}</span>
        <div className='flex justify-center items-center gap-2 absolute right-7'>
            <AiOutlinePlus className='border-2 text-gray-600 border-gray-600'/>
            <span>{qty}</span>
            <AiOutlineMinus className='border-2 text-gray-600 border-gray-600'/>
         </div>
        </div>
        
       </div>
    </div>
  )
}

export default Itemcard
