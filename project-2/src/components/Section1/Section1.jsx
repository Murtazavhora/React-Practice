import React from 'react'
import Navbar from './Navbar'
import Pag1content from './Pag1content'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
     <Navbar/> 
     <Pag1content users = {props.users} />
    </div>
  )
}

export default Section1
