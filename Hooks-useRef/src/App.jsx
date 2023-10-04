import { useEffect, useRef, useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
   //    const [val,setVal]=useState("")

  //   const onHandleChange=(e)=>{
 //     console.log(e.target.value)
                    //     setVal(e.target.value)
                    //   }
                    // console.log(val);

                      const [val,setVal]=useState({
                      name:"",
                      email:""
                    })
                    const handleText=(e)=>{
                        setVal((pre)=>{
                          return {
                            ...pre,[e.target.name]:e.target.value
                          }
                        })
                    }
                    const clickMe=()=>{
                      console.log("name  :",val.name);
                      console.log("email :",val.email);
                    }

                    // console.log("name=" ,val.name);
                    // console.log("email=" ,val.email);
                    
                    console.log('parent');

                    const inputRef=useRef();
                    const accessRef=()=>{
                      console.log(inputRef.current.value);
                    }

                      return (
                        <>
                         {/* <form action=" "   > */}
                          <input type="text" placeholder='Name' value={val.name} name='name' ref={inputRef} onChange={handleText}/>
                          <input type="text" placeholder='Email' value={val.email} name='email' ref={inputRef} onChange={handleText}/>
                          {/* </form> */}
                          <button onClick={accessRef}>Click Here</button>
                       
                          
                          <Counter/>
                        </>
                      )
                  }

export default App
