import { useEffect, useState } from 'react'
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
                    // useEffect(()=>{
                    //     console.log("running");

                    //     // return(
                    //     //   console.log("unmounnd")
                    //     // )
                    // },[])
                    console.log('parent');

                      return (
                        <>
                          {/* <span>Name</span>
                          <input type="text"  value={val} onChange={onHandleChange}/> */}

                          <input type="text" placeholder='Name' value={val.name} name='name' onChange={handleText}/>
                          <input type="text" placeholder='Email' value={val.email} name='email' onChange={handleText} />
                          <button onClick={clickMe}>ClickHere</button>
                          
                          <Counter/>
                        </>
                      )
                  }

export default App
