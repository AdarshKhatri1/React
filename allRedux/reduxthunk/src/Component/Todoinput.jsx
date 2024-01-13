import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Get_Todo_Failure_obj, Post_Todo_Failure_obj, Post_Todo_Request_obj, Post_Todo_Success_obj } from "../Redux/Actions";

export default function Todoinput({gettodo}){
    const [task,setTask] = useState("");

    const dispatch = useDispatch();

    const postfuc=()=>{
        const payload = {
            task: task,
            status:false
        }

        dispatch(Post_Todo_Request_obj())
        return axios.post("http://localhost:8080/todos",payload)
        .then((r)=>{
            console.log(r);
                dispatch(Post_Todo_Success_obj(r.data))
        })
        .catch((e)=>{
            dispatch(Post_Todo_Failure_obj())
        })
    }

    const handlePost = ()=>{
        postfuc().then(()=>{
            // gettodo();

            dispatch(gettodo)
        })
    }
    
    return (
        <div>
            <input value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Write Task" />
            <button onClick={()=>{
                    handlePost();
                    
            }}> Add Task</button>

        </div>
    )
}