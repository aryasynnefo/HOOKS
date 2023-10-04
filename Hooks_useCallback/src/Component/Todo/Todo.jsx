import React, { useState,memo } from 'react'

const Todo = ({todos,addTodo}) => {


console.log("child");

  return (
    <div>
    
      <button onClick={addTodo}>Add</button>
      <h1>{todos}</h1>
     
    </div>
  )
}

export default memo(Todo)