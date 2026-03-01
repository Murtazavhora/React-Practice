import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 font-medium text-lg '>
            <Link to={'/Contact/men'}>Men</Link>
            <Link to={'/Contact/women'}>Women</Link>
        </div>
      <Outlet/>
    </div>
  )
}

export default Product
