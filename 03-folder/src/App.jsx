import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='Parent'>
      <Card user={{Name:"Murtuza",text:"Hello guys, I am Learning React Here!!!!"}} />
      <Card user={{Name:"Taha",text:"Hello guys, am doing Internship in Bangalore"}}/>
    </div>
  )
}

export default App
