import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right'className='h-full p-6 rounded-4xl overflow-x-auto w-2/3 flex flex-nowrap gap-10'>
      {props.users.map(function(user,idx) {
        return <RightCard key={idx} id={idx} img={user.img} tag = {user.tag} />;
      })}
    </div>
  )
}

export default RightContent
