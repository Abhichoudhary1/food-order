import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-10 font-bold '>
      <h3>find the best food</h3>
 <div className='flex mx-4 my-2'>
 <div >
        <button className='px-3 py-2 mx-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
      </div>
      <div>
        <button className='px-3 py-2 mx-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
      </div>
      <div>
        <button className='px-3 py-2 mx-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
      </div>
      <div>
        <button className='px-3 py-2 mx-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
      </div>
     
    </div>
 </div>
      
  )
}

export default CategoryMenu
