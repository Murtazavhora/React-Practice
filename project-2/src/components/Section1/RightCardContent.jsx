import React from 'react'

const RightCardContent = (props) => {
      
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-transparent flex flex-col justify-between p-8'>
        <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-xl '>{props.id+1}</h2>
        <div className='flex flex-col justify-around'>
            <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nulla. Error odio sit repudiandae consectetur.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 font-medium text-white px-8 py-3 rounded-full text-md '>{props.tag}</button>
                <button className='bg-blue-600 font-medium text-white px-4 py-3 rounded-full text-md'> <i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
     </div>
  )
}

export default RightCardContent
