import React from 'react'

const Card = ({user}) => {
  return (
  <div className="card">
        <img src="https://images.unsplash.com/photo-1769863467291-23cf7902f686?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{user.Name}
        </h1>
        <p>{user.text}</p>
        <button>View Profile</button>
  </div>
  )
}

export default Card
