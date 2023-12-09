import { useState } from "react"

export default function Todoinput({addTodo}){

    const [title,setTitle] = useState("");
   
    return <div>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Add Task"/>
        <button onClick={()=>{
            addTodo(title)
        }} >Add</button>
    </div>
}