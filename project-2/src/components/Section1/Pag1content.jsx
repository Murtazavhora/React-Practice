import React from 'react'
import RightContent from './RightContent'
import LeftContent from './leftContent'
const Pag1content = (props) => {
  return (
    <div className='py-10 px-10 flex justify-between items-center gap-10 h-[90vh]  '>
      <LeftContent/>
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Pag1content
