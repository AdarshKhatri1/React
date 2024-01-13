import { useDispatch, useSelector } from "react-redux";
import Todoinput from "./Todoinput";
import { useEffect } from "react";
import { Actions } from "../Redux/Actionobj";
import { Get_Todo_Failure_obj, Get_Todo_Request_obj, Get_Todo_Success_obj, getTodo } from "../Redux/Actions";
import axios from 'axios'

export default function Todo(){

    const todo = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        console.log("inside use effect of todo")
            dispatch(getTodo)
            // getTodo(dispatch)
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