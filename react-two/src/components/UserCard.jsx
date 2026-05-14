import React from 'react'
import mb from '../assets/mb.jpeg'

const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='user-name'>Varshitha</p>
      <img id='user-img' src={mb}  alt="aiml" />
      <p id='user-desp'>Description </p>
    </div>
  )
}

export default UserCard
