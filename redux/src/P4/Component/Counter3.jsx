
import { useContext, useState } from "react";
import { addCounter, reduceCounter } from "../Redux/actions";
import { Appcontext } from "../Redux/Appcontex";

export default function Counter3(){

    const [state,setState] =  useState(0);

    const{dispatch,getState} = useContext(Appcontext)

    const {counter} = getState();
    const handleAdd=()=>{
        dispatch(addCounter(1));
        setState((prev)=>prev+1)
    }
    const handleReduce=()=>{
        dispatch(reduceCounter(1));
        setState((prev)=>prev+1)
    }
    console.log(counter)

    return(
        <div>
            <div>Counter : 0</div>
            <button onClick={()=>(handleAdd())}>Add</button>
            <button onClick={()=>(handleReduce())}>Reduce</button>

        </div>
    )
}

// ye kam ni kar raha hai but sir ka kar raha hai