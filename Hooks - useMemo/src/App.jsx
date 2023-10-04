import {  useMemo, useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
   const[parent,setParent]=useState(0);
   const[child,setChild]=useState(0);
   const cnt=useMemo(()=>{Counter({data:child})},[child])
   

    console.log("parent");                

  return (
     <>
      <div>
          <h1>Parent={parent}</h1> 
          <button onClick={()=>{setParent(parent+1)}}>ParentClick</button>
      </div>  
      <div>
        {cnt}
        <button onClick={()=>{setChild(child+1)}}>ChildClick</button>
      </div>  

             
    </>
     )
  }

export default App
