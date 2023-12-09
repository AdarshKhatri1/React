import { useState } from "react"
import { useDispatch } from "react-redux";
import uuid from "react-uuid"
import { Add_todo_Creator } from "../Redux/Action";
import { Store } from "../Redux/Store";

export default function Todoinput(){

    const [title,setTitle]  = useState("");
    const dispatch = useDispatch();

    const handleAdd=()=>{
        const payload = {
            title,
            status:false,
            id :uuid()
        }
        console.log(payload)
        console.log(Store.getState())
        dispatch(Add_todo_Creator(payload));
    }

    return <div>
        <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} placeholder="Addtodo"/>
        <button onClick={handleAdd}>Add</button>
    </div>
}