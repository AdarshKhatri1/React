

import { Store } from "../Redux/Store";
import { addCounter, reduceCounter } from "../Redux/actions";
export default function Counter(){

    const {counter} = Store.getState();
    const {dispatch} = Store

    return(
        <div>
            <div>Counter : {counter}</div>
            <button onClick={()=>(dispatch(addCounter(1)))}>Add</button>
            <button onClick={()=>(dispatch(reduceCounter(1)))}>Reduce</button>

        </div>
    )
}

// it not worked 
// const reducer = (state= initState,{type,payload})=>{

//     console.log(state,type,payload) in reducer.js of Redux

// see console is working but not updating in dom

// solution counter2.jsx