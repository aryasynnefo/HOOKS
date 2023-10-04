import { useState } from 'react'
import './App.css'

function App() {
  const [val,setVal]=useState({
    fname:"",
    lname:"",
    place:"",
    age:"",
    mob:""
  })
 const onHandleChange=(e)=>{
    setVal((pre)=>{
      return{...pre,[e.target.name]:e.target.value}
    })
 }
  
 const onHandleClick=(e)=>{
  e.preventDefault();
  console.log("fname   :",val.fname);
  console.log("lname   :",val.lname);
  console.log("age     :",val.age);
  console.log("place   :",val.place);
  console.log("mob     :",val.mob);
 }
  // console.log("fname   :",val.fname);
  // console.log("lname   :",val.lname);
  // console.log("age     :",val.age);
  // console.log("place   :",val.place);
  // console.log("mob     :",val.mob);
  return (
    <>
    <div className='main'>
        <form action="">
            <div className='form'>
                <input type="text" name='fname' value={val.fname} placeholder='First Name' className='input'  onChange={onHandleChange}/>
            </div>
            <div className='form'>
                <input type="text" name='lname' value={val.lname} placeholder='Last Name' className='input'  onChange={onHandleChange}/>
            </div>
            <div className='form'>
                <input type="text" name='age' value={val.age} placeholder='Age' className='input'  onChange={onHandleChange}/>
            </div>
            <div className='form'>
                <input type="text" name='place'  value={val.place}  placeholder='Place' className='input'  onChange={onHandleChange}/>
            </div>
            <div className='form'>
                <input type="text" name='mob' value={val.mob}  placeholder='Mob' className='input'  onChange={onHandleChange}/>
            </div>
            <button className='btn' onClick={onHandleClick}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
