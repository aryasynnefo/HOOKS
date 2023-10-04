import { useCallback, useState } from 'react'
import Todo from './Component/Todo/Todo';
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [todos,setTodos]=useState([])

  const increment=()=>{
    setCount(count+1);
  }
  const addTodo=useCallback(()=>{
    setTodos((todo)=>[...todo,"new todo"])
},[todos])
 console.log("parent");
  return (
    <>
      <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
      </div>
      <Todo todos={todos} addTodo={addTodo} />
    </>
  )
}

export default App
