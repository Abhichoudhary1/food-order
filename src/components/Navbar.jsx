import React from 'react'

const Navbar = () => {
  return (
     <nav className='flex justify-between py-3 mx-6'>
        <div >
         <h3 className='text-xl font-bold'>pizzaro</h3>
        </div>
        <div >
        <input type="search" placeholder='search here' className='p-3 border border-gray-250 text-sm rounded-lg outline-none' />
        </div>
     </nav>
  )
}

export default Navbar
