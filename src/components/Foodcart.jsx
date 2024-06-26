import React from 'react'
import { CiStar } from "react-icons/ci"
import { useDispatch } from 'react-redux'
import { addtocart } from '../Redux/slices/Cartslices'


const Foodcart = ({id, name, img, desc, price, rating }) => {
    const dispatch = useDispatch()
    return (
        <div >
     <div className=' font-bold bg-white p-5 w-[250px] flex flex-col rounded-lg gap-2'>
            <img src={img} alt="" className='w-auto h-[130px] hover:scale-75 '/>
            <div className='text-sm flex justify-between'>
                <h2>{name}</h2>
                <span>
                    ₹{price}
                </span>
            </div>
            <p className='text-sm font-normal'>{desc.slice(0, 50)} </p>
            <div className='flex justify-between'>
                <span className='flex justify-center items-center'>
                <CiStar  className='mr-1'/>{rating}
                </span>
                <button onClick={()=>{
                    dispatch(addtocart({id, name, price, rating, img, qty:1}))
                }}className='p-1 text-white bg-green-500 rounded-lg'>
                   add to cart
                </button>
            </div>
        </div>

        
        </div>
       
        
    )
}

export default Foodcart
