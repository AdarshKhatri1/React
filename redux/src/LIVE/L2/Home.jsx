import { useDispatch, useSelector } from "react-redux"


export default function Home(){
    // const state = useSelector((state)=>state)
    const state = useSelector((state)=>state.count) //its a better way because of unnecessary re-render from 1st
    
    console.log(state)
    const dispatch = useDispatch()

    const handleAdd=()=>{
        dispatch({
            type:"INCREMENT_AMOUNT"
        })
    }
    const handlesub=()=>{
        dispatch({
            type:"DECREMENT_AMOUNT"
        })
    }
    return(
        <div>
            <h1>Count:{state}</h1>
            <button onClick={()=>handleAdd()}>add</button>
            <button onClick={()=>handlesub()}>sub</button>
        </div>
    )
}