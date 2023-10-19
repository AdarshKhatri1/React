
import { useState } from "react";
import { addCounter, reduceCounter } from "../Redux/actions";
import { store } from "../Redux/store";

export default function Counter2(){

    const [state,setState] =  useState(0);
    const {counter} = store.getState();
    const {dispatch} = store

    const handleAdd=()=>{
        dispatch(addCounter(1));
        setState((prev)=>(prev+1))
    }
    const handleReduce=()=>{
        dispatch(reduceCounter(1));
        setState((prev)=>(prev+1))
    }
    console.log(counter)

    return(
        <div>
            <div>Counter : {counter}</div>
            <button onClick={()=>(handleAdd())}>Add</button>
            <button onClick={()=>(handleReduce())}>Reduce</button>

        </div>
    )
}
