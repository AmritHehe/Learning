import React , { useState , useEffect, ChangeEvent } from "react";



function InputBox() { 

    const [text , setText] = useState("")
    const [data , setData] = useState([])
    const [find , setFind] = useState<string[]>([]);
    
    
useEffect (()=> { 
    
    let filtered = data.filter(value => value.toLowerCase().includes(text.toLowerCase()))
    
    setFind(filtered)
},[text , data])
    function onChange(e :ChangeEvent<HTMLInputElement>){ 
        setText(e.target.value)
    }
    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //@ts-ignore
      .then(data =>{let hehe =  data.map(item => item.name);
        setData(hehe) ;
        //  console.log(hehe)
      } )


    }, [])

    return <>
        <input type="text" placeholder="Serch Something"  onChange={onChange} value={text}/>
        <br />
        <div className="w-full  flex items-center justify-center">
        <div className="flex flex-col w-1/6 ">{find}</div>
        
        </div>
        <br />
        {/* {data} */}
    </>
}

export default InputBox