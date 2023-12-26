import { useDispatch, useSelector } from "react-redux";
import Todoinput from "./Todoinput";
import { useEffect } from "react";
import { Actions } from "../Redux/Actionobj";
import { Get_Todo_Failure_obj, Get_Todo_Request_obj, Get_Todo_Success_obj } from "../Redux/Actions";
import axios from 'axios'

export default function Todo(){

    const todo = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    
    const getTodo=()=>{

        dispatch(Get_Todo_Request_obj());
        return axios.get("http://localhost:8080/todos")
        .then((r)=>{
            dispatch(Get_Todo_Success_obj(r.data))
        })
        .catch((e)=>{
            dispatch(Get_Todo_Failure_obj())
        })

    }
    useEffect(()=>{
            getTodo()
    },[])
    
    return (
        <div>
                <Todoinput gettodo={getTodo}/>

                {
                todo.map((item)=>{
                  return  <div key={item.id}>{item.task} - {item.status?"True":"False"} </div> 

                })
                }
           
        </div>
    )
}