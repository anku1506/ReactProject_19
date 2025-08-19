import React, { useState } from 'react'

const CreateTodo = (props) => {
  const name = props.name;
  const [task,setTask] = useState(0);
//Adding task 
  const handleAdd = (e) => {
    console.log(e);
    
    setTask(task + 1);
  }

  //deleting task
  const handleDelete = () => { 
    const vale = task - 1;    
    setTask(vale);
  }
//Reset task
   const handleReset = () => {   
    setTask(0);
  }

  

  return (
    <>
      {name}
      <h1>Task: {task}</h1>
      <div style={{display:'flex',gap:'8px'}}>
        <button onClick={handleAdd}>Add TAsk</button>      
      <button onClick={handleDelete}>Delete TAsk</button>
      <button onClick={handleReset}>Reset TAsk</button>
      </div>
      
    </>
  )
}

export default CreateTodo;