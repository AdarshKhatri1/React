import { useContext } from "react"
import { Actions, reducerContext } from "./Reducer&Context"


export default function ReducerwithContext(){

    const {state,dispatch} = useContext(reducerContext)
    
    return(
        <div>
            <h2>Work on reducer with Context</h2>
            <h1>{state.count}</h1>
            <button onClick={()=>(dispatch({type:Actions.Increment,payload:2}))}>Add</button>
            <button onClick={()=>(dispatch({type:Actions.Decrement,payload:2}))}>Subtract</button>
        </div>
    )
}