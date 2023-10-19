
import { addCounter, reduceCounter } from "../Redux/actions";
import { store } from "../Redux/store";

export default function Counter(){

    const {counter} = store.getState();
    const {dispatch} = store

    return(
        <div>
            <div>Counter : 0</div>
            <button onClick={()=>(dispatch(addCounter(1)))}>Add</button>
            <button onClick={()=>(dispatch(reduceCounter(1)))}>Reduce</button>

        </div>
    )
}

// it not worked 
// const reducer = (state= initState,{type,payload})=>{

//     console.log(state,type,payload)


// see console is working but not updating in dom

// solution counter2.jsx