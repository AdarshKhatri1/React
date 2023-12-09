import { Actions } from "./Actionobj"
 const handleAddobj = (payload)=>{
    return {
        type:Actions.Add,
        payload
    }
}
const handleReduceobj = (payload)=>{
    return{
        type:"Reduce",
        payload
    }
}
export {handleAddobj,handleReduceobj};