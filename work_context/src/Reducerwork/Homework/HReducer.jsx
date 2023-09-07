import { useContext } from "react";
import { HReducerContext, Haction } from "./HReducerContext";


export default function HReducer(){

    const {state,dispatch} = useContext(HReducerContext);


    console.log(state)
    return (

        <div>
            <h3>I am HReducer</h3>
            <h1>  Amount = {state.amount}</h1>

            <button  onClick={()=>(dispatch({type:Haction.Increase,payload:100}))}>Add</button>
            <button disabled={state.amount===0} onClick={()=>(dispatch({type:Haction.Decrease,payload:100}))}>Subtract</button>
            
        </div>
    )
}