import React from 'react'
import Foodcart from './Foodcart'
import FoodData from '../Data/FoodData.js'
const Fooditem = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-start mx-6'>
     {
      FoodData.map((food)=>{
        return(
         <Foodcart key={food.id}
                id={food.id}
                img={food.img}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                name={food.name}
         />
        )
      })
     }
     
    </div>
  )
}

export default Fooditem
