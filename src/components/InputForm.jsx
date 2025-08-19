import React, { useState } from 'react'

const InputForm = () => {

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value)    
  }
  return (
    <>
      <h1>welcome to input form component</h1>
      <input type='text' value={input} onChange={handleChange} />
      <button>Add task</button>
    {/* printing input value below */}
      <h2>{ input}</h2>
    </>
  )
}

export default InputForm;