// Appcontext add hua

import { useContext, useState } from "react";
import { addCounter, reduceCounter } from "../Redux/actions";
import { Appcontext } from "../Redux/Appcontex";

export default function Counter3(){

    const [state,setState] =  useState(0);

    const{dispatch,getState} = useContext(Appcontext)

    const {counter} = getState();
    const forceUpdate = ()=>setState(state+1);
    const handleAdd=()=>{
        dispatch(addCounter(1));
        forceUpdate();
        }
    const handleReduce=()=>{
        dispatch(reduceCounter(1));
        forceUpdate();
    }
    console.log(counter)

    return(
        <div>
            <div>Counter : {counter}</div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>

        </div>
    )
}

