import React , {useState , useEffect} from "react";

function Stopwatch() { 

    const [watch, setWatch ] = useState(0); 
    const [start , setStart ] = useState(false)


    const[hours , setHours] = useState(0); 
    const[mins , setMins] = useState(0); 
    const[secs , setSecs] = useState(0)
    function pause( ){ 
        setStart(false)

    }
    function play( ){ 
        setStart(true)
    }
    function clear(){ 
        setStart(false)
        setWatch(0)
        setHours(0)
        setMins(0)
        setSecs(0)
    }
    function FinalWatch() { 
      if(watch >=100){ 
        setSecs(c=>c+1)
        setWatch(0)
      }
      if(secs >= 60){ 
        setMins(c=>c+1)
        setSecs(0)
      }
      if(mins >= 60){ 
        setHours(c=>c+1)
        setMins(0)
      }
      return <>
      {hours} : {mins} : {secs} : {watch}
      </>
    }
    

    useEffect(function clock() { 
        let Interval = null ; 
        if(start){ 
        Interval = setInterval(()=> {setWatch(c=>c+1) } , 10)
        } 
        //@ts-ignore
        else{ (clearInterval(Interval)) }

        return (()=> { 
            //@ts-ignore
            clearInterval(Interval)
        })
    }, [start]) 



    return <>{watch}
    <br />
    <FinalWatch/>
        <button onClick={play}> Start </button>
        <button onClick={pause}>Pause</button>
        <button onClick={clear}>Reset</button>
    </>
}

export default Stopwatch