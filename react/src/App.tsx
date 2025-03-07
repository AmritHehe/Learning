import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
type user = {
  id: number;
  name: string;
};
function App() {
  const [query , setQuery ] = useState(''); 
  const [ results , setResults] = useState<user[]>([]);
  const [ users , setUsers ] = useState<user[]>([]);

  useEffect(()=> { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>  setUsers(data));
       
  },[])
  useEffect(() => {
    const filtered = users.filter((user) =>
      //@ts-ignore
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, users]);
  return (
    <>
     <div className='p-4'>
       <input  className = ' border radius-xl  rounded-lg' type="text" name="" id=""  placeholder='Type here something' value={query} onChange={(e) => setQuery(e.target.value)}/>
       <ul className='mt-2'>
          {results.map((user) => (
            //@ts-ignore
            <li key={user.id} className='p-2 border-b'>
              {user.name}
            </li>
          ))}
        </ul>
     </div>

    </>
  )
}

export default App
