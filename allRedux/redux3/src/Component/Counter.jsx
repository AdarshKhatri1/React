import { useState } from "react"
import { handleAddobj,handleReduceobj } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";


export default function Counter(){
    const count = useSelector(state=>state.appReducer.count)
    const dispatch = useDispatch() 

    return <div>
       hello
     <h1> Counter {count}</h1> 
     <button onClick={()=>dispatch(handleAddobj(3))}>Add</button> 
     <button onClick={()=>dispatch(handleReduceobj(2))}>Reduce</button>  

    </div>

  


}