import { useState } from 'react'//to use hooks and other functions
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(0)
  //let counter =15
  const addValue = ()=>{
    if(counter<20)
    setCounter(counter+1)//assigns new value to counter
  }
  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
     <h1>RUSTYYY</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br/>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
