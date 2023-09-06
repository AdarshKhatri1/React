import { useReducer } from "react"
const initialState ={
    count:0
}

const  reducer= (state,action)=>{
    switch(action.type){
        case "increment":
        return{
            ...state,count:state.count+1
        }
        case "decrement":
            return{
                ...state,count:state.count-1
            }
            default:{
                return state
            }
    }       
}


export default function Wreducer(){
    const [state,dispatch] = useReducer(reducer,initialState) 
    return(
        <div>
            <h2>Work on reducer</h2>
            <h1>{state.count}</h1>
            <button onClick={()=>(dispatch({type:"increment"}))}>Add</button>
            <button onClick={()=>(dispatch({type:"decrement"}))}>Subtract</button>
        </div>
    )
}