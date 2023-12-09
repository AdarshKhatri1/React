// solution in by using state and setState but this is hack not actual way

import { useState } from "react";
import { addCounter, reduceCounter } from "../Redux/actions";
import { Store } from "../Redux/Store";

export default function Counter2(){

    const [state,setState] =  useState(0);
    const {counter} = Store.getState();
    const {dispatch} = Store

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
