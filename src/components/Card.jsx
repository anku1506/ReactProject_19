import React from 'react'
import CreateTodo from './CreateTodo';
import UserCard from './UserCard';


const Card = () => {
  return (
      <>
        <h3>From Card-Counter</h3>
      <CreateTodo />
      <UserCard name='Anku kumar'
      profession='Software engineer'

      />
      

      </>
          
  
  )
}

export default Card;