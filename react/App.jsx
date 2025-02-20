import { useState } from 'react'
import './App.css'

function App() {

   let [counter,setCounter]= useState(5) 
   

  // let counter =5

  const addValue =()=>{
     console.log("click",counter);
     counter=counter+1
     setCounter(counter)
  }
  // const removeValue =()=>{
  //   console.log("click",counter)
  //   counter =counter -1 
  //   setCounter (counter)
  // }
  const removeValue =()=>{
     if(counter>0){
      setCounter(removeValue=>removeValue-1)
    }
  }

  return (
    <>
       <h1>My Counter App</h1>

       <h2>Counter value :{counter}</h2>
       <button onClick={addValue}>Add Value{}</button>
       <br/>
       <button onClick={removeValue}>Remove Value</button>

       <p>footer{counter}</p>
    </> 
  )
}

export default App
