import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {

  const[activecart, setActivecart] = useState(true)
   const cartitems = useSelector((state)=>state.cart.cart)
   const totalitmes = cartitems.reduce((totalitmes,item)=> totalitmes + item.qty, 0)
   const totalprice = cartitems.reduce((totalprice,item)=>totalprice + item.qty * item.price, 0)
     return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${activecart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between my-3'>
            <span className='text-xl font-bold'>My Order</span>
            <IoMdClose onClick={()=>setActivecart(!activecart)}className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md'/>
        </div>
      {
       cartitems.length > 0 ? cartitems.map((food)=>{return(<Itemcard key={food.id} id={food.id} img={food.img} price={food.price} name={food.name} qty={food.qty}  />)}) : <h2 className='text-center'>your cart is empty</h2>
      }
        
        
        <div className='absolute bottom-0'>
        <h3>Items:{totalitmes}</h3>
        <h3>Total:{totalprice}</h3>
        <hr />
        <button className='bg-green-500 px-3 font-bold text-white py-2 rounded-lg w-[18vw] mb-2'>checkout</button>
      </div>
      
      </div>
      <FiShoppingCart onClick={()=>setActivecart(!activecart)} className='rounded-full bg-white shadow-md text-6xl p-4  fixed bottom-4 right-4'/>
      
    </>
  )
}

export default Cart
