import React , { useState , useEffect} from "react"


function Digitalclock(){ 
     
    const [time , setTime ] = useState( new Date())
    const [options , setOptions ] = useState("12")
    

    useEffect(()=> { 
     const interval =  setInterval(()=> {setTime (new Date())} , 1000)
    
     return () => { 
        clearInterval(interval)
     }
    },[])

    function TimeHMS(){ 
        let Hrs = time.getHours(); 
        let Mins = time.getMinutes(); 
        let Seconds = time.getSeconds();

        return ( 
            <>{padZero(Hrs)} : {padZero(Mins)} : {padZero(Seconds)}</>
        )
    }
    function TimeHMSM(){ 
        let Hrs :number= time.getHours(); 
        let Mins :number = time.getMinutes(); 
        let Seconds : number = time.getSeconds();
        let meredian :String = Hrs >= 12 ? "PM" : "AM"; 
        Hrs  = Hrs % 12 || 12

        return <>
        {padZero(Hrs)} : {padZero(Mins)} : {padZero(Seconds)} : {meredian}
        </>
    }
    function padZero(number : number) { 
        return ((number < 10 ? "0" : "") + number);
    }
    function change124(){ 
        if(options === "12"){ 
            setOptions("24")
        }
        else { 
            setOptions ("12")
        }
    }
    return <div>
        haha ye lo time dekho <br/> 
        
        
        <button onClick={change124}>{options}</button>
        <br />
        {options === "12" ? <TimeHMS/> : <TimeHMSM/>}
    
    </div>
}

export default Digitalclock;

