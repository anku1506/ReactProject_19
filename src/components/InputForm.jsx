import React, { useState } from 'react'

const InputForm = () => {

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value)    
  }
  return (
    <>
      <h3>welcome to input form component</h3>
      <input type='text' value={input} onChange={handleChange} />
      <button>Add task</button>
    {/* printing input value below */}
      <h2>{ input}</h2>
    </>
  )
}

export default InputForm;