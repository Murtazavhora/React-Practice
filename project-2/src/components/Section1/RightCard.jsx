import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  
  return (
    <div className='h-full w-80 flex-shrink-0 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
     <RightCardContent tag = {props.tag} id ={props.id} />
    </div>
  )
}

export default RightCard
