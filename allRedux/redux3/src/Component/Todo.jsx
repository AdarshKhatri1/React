import axios from "axios"
import {  useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { handle_PostFailure, handle_PostRequest, handle_PostSuccess, handle_todoFailure, handle_todoRequest, handle_todoSuccess } from "../Redux/AppReducer/action";
import Todoinput from "./Todoinput";

export function Todo(){

    const {todos,isLoading,isError} = useSelector(state=>{
        return{
            todos:state.appReducer.todos,
            isLoading:state.appReducer.isLoading,
            isError:state.appReducer.isError

        }
    },shallowEqual)

   // shallowEqual is for deep check of return value so that if i click on add counter todo Component should not rerender (it goes inside and every key and value equal or not in both Object(only one level deep not work in nested obj)). ACTUALLY IT PREVIOS IT USES ===(TRIPLE EQUAL) BUT NOT NOW.

  // There is another one is deepequal which check unlimited level deep inside to check obj key and values are same ar not

  
    // const todos = useSelector(state=>state.todos)
    // const isLoading = useSelector(state=>state.isLoading)
    // const isError = useSelector(state=>state.isError)
    const dispatch = useDispatch();

    const getTodos=()=>{
        dispatch(handle_todoRequest())
       return axios.get("http://localhost:8080/todos")
        .then((r)=>{
            // console.log(r.data)
            dispatch(handle_todoSuccess(r.data));
        })
        .catch((e)=>{
            console.log(e)
            dispatch(handle_todoFailure());
        })
    }

    const postTodo=(title)=>{

        dispatch(handle_PostRequest());
        if(title){
            const payload = {
                title:title,
                status:false
            }
            return axios.post("http://localhost:8080/todos",payload)
            .then((r)=>{
               dispatch(handle_PostSuccess(r));
            })
            .catch((e)=>{
                dispatch(handle_PostFailure(e));
            })
        }
        
    }
    const handle_PostMethods=(title)=>{
        postTodo(title).then(()=> getTodos())
    }

    useEffect(()=>{
        getTodos()
    },[])
// console.log("inside todo")
    return <div>
        <Todoinput addTodo={handle_PostMethods} />
        {todos.map((item)=>
            <div key={item.id}>
                {item.title} - {item.status?"True":"False"}
            </div>
        )}
    </div>
}



