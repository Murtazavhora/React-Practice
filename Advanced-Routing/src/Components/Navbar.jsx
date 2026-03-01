import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex px-8 py-4 justify-between bg-cyan-700 items-center '>
      <h2 className='text-xl font-bold '>Raj</h2>
      <div className='flex gap-10 '>
        <Link className='text-lg font-medium'  to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/Contact'>Contact</Link>

      </div>
    </div>
  )
}

export default Navbar
