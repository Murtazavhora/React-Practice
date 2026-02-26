import React, { useState } from 'react'
import {Trash} from 'lucide-react'
const App = () => {
  
  const [title,setTitle] =useState('')
  const [details,setDetails] = useState('')
  const  [task,setTask] = useState([])

  const submithandler= (e)=>{
    e.preventDefault()
    
    let Copytask = [...task];
    Copytask.push({
      title,details
    })
    setTask(Copytask)
    
    setTitle('')
    setDetails('')
  }

  function deleteNote(e,idx){
    const copytask =[...task];
    copytask.splice(idx,1)
    setTask(copytask)
  }





  return (
    <div className='h-screen lg:flex  bg-[#2D4F1E] text-[#E27D60] '>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex justify-between lg:w-1/2 gap-4 items-start  p-20 '>
        <div className='flex gap-4 w-1/2 items-start flex-col'>
        
        < h1 className='text-3xl font-bold'>Add Notes</h1>
         
          <input type="text"
         className='px-5 w-full bg-[#F5E6CC] font-medium rounded outline-none border-[#4A4A4A] border-2' 
         placeholder='Enter notes Heading' value={title} onChange={(e)=>{
          setTitle(e.target.value )
         }} />
        
        <textarea type="text" 
        className='px-5 py-2 h-20 bg-[#F5E6CC] font-medium w-full outline-none rounded border-[#4A4A4A] border-2' 
        placeholder='enter details' value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }} />
        
        <button className='bg-[#F5E6CC] active:bg-amber-400 border-[#4A4A4A] active:scale-95 w-full font-medium outline-none text-[#E27D60] px-5 py-2 rounded'>Add Note</button>
        </div>
      </form>

      <div className=' border-l-2 gap-5 lg:w-1/2 p-10 bg-[#F5E6CC]'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
        {task.map(function(elem,idx){
          return (<div key={idx} className='relative bg-white w-40 h-52 rounded-2xl p-4'>
            <button className='right-5 cursor-pointer  absolute top-5 text-xs' onClick={(e)=>{
              deleteNote(e,idx)
            }} ><Trash/></button>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium'>{elem.details}</p>
        </div>)
        })}
        
      </div>
      </div>
    </div>
  )
}

export default App
