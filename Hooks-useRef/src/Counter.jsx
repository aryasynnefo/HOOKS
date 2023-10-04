
import Reat,{useState,memo} from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    console.log(count);
    console.log("child");
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default memo(Counter);