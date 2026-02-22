import React from 'react'
import Section1 from './components/Section1/Section1'
const App = () => {
  const users = [
    {img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum!',
      tag:'Satisfied'},
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum!',
      tag:'Underbanked'},
    {img:'https://images.unsplash.com/photo-1752170080622-18196de87763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum!',
      tag:'Underserved'},
    {img:'https://images.unsplash.com/photo-1752170080622-18196de87763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum!',
      tag:'Underserved'}
  ]
  return (
    <div id='main'>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App
