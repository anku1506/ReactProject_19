import React from 'react'

const UserCard = (props) => {
    // Also write like below-on the fly 
    // const UserCard = ({ name, profession }) => {}
    //props are immutable.It is read only within child component.
    const { name, profession } = props;     
      return (
      <div>
          <h2>{name}</h2>
          <p>{profession}</p>
          <h3>This is { name}.I am a {profession}</h3>
    </div>
  )
}

export default UserCard;