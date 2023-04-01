import {useState} from 'react'

export default function Counter({name = "No name Button"}){
    const [value, setValue] = useState(0);
    return(
      <>
        <h3>{name}</h3>
        <p>{value}</p>
        <button onClick={()=>setValue(value+1)}>Increment</button>
        <button onClick={() => setValue(value-1)}>Decrement</button>
      </>
    )
  }