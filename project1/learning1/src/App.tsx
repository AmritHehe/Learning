import { useEffect, useState } from 'react'

import './App.css'
import Digitalclock from './components/clock';
import Stopwatch from './components/Stopwatch';
import InputBox from './components/Input';

interface CountState { 
  count : number;
}

function App() {
    const[count , setCount ] = useState<number>(0);
    const[color , setColor ] = useState<string>("green")
    const[width , setWidth ] = useState<number>(window.innerWidth)
    const[height , setHeight] = useState<number>(window.innerHeight)

    


  function updateCount(){ 
    setCount(c => c + 1);
    
  }
  function degradeCount(){ 
    setCount ( c=> c - 1);
  }
  function changeColor(){ 
    setColor (c => color === 'green' ?  "red" : "green")
  }
  useEffect(
    function handleChamge() { 
      document.title = `Count : ${count} ${color}`
    },[count , color]
  )

  function handlesize(){ 
    setWidth (window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect (()=>{
    window.addEventListener("resize" ,handlesize)  
    console.log("added event")
  }, [])
  return (
    <>
      <div style={{color : color}}>
      Counter variable : {count}
      </div>
      <button onClick={updateCount }>Oh yeah !</button>
      <button onClick={degradeCount }>Oh No !</button>
      <button onClick={changeColor } >  Damn</button>

      <div>
        height = { height} 
        <br />
        width = {width}
      </div>
      <div>
        Our clock 
        <Digitalclock/>
      </div>
      <div>
        Our SmartWatch
        <Stopwatch/>
      </div>
      <br />
      <br />
      <br />
      
      <div>
        <InputBox/>
      </div>


      
      
      
    </>
  )
}

export default App
