import { useState } from "react"
import { store } from "../Redux/store"
import { handleAddobj,handleReduceobj } from "../Redux/action";
export default function W2(){
const data = store.getState();
const {dispatch,subscribe} = store;
const [print, setPrint] = useState(0);



subscribe(()=>{
    console.log("Inside Subscribe")
    setPrint((prev)=>prev+1);
})

// function handleAdd(){
//     dispatch({type:"Add",payload:1})
//     console.log(store.getState())
// }
// function handlereduce(){
//     dispatch({type:"Reduce",payload:1})
//     console.log(store.getState())
// }
console.log(data,"DATA");
    return <div>
        <h1> Counter: {data.count}</h1>

    {/* <button onClick={handleAdd}>Add</button> */}
    <button onClick={()=>dispatch(handleAddobj(3))}>Add</button>

    {/* <button onClick={handlereduce}>Reduce</button> */}
    <button onClick={()=>dispatch(handleReduceobj(2))}>Reduce</button>

    </div>



}