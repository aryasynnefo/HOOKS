import React from 'react'

const Counter = ({data}) => {
  console.log("child");
 
  return (
    <div>

    <h1>Child={data}</h1>
    </div>
  ) 
}

export default  Counter