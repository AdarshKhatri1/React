import { useState } from "react"

export default function W1(){
    const[count,setCount] = useState(12);

    return <div>
        <h1> Counter: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Reduce</button>
    </div>



}