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
const handle_todoRequest=()=>{
    return{
        type:Actions.TodoRequest
    }
}
const handle_todoSuccess= (payload)=>{
    return{
        type:Actions.TodoSuccess,
        payload
    }
}
const handle_todoFailure=()=>{
    return {
        type:Actions.TodoFailure
        
    }
}
const handle_PostRequest=()=>{
    return{
        type:Actions.POST_REQUEST
    }
}
const handle_PostSuccess= (payload)=>{
    return{
        type:Actions.POST_SUCCESS,
        payload
    }
}
const handle_PostFailure=()=>{
    return {
        type:Actions.POST_FAILURE
        
    }
}
export {handleAddobj,handleReduceobj,handle_todoRequest,handle_todoSuccess,handle_todoFailure,handle_PostFailure,handle_PostRequest,handle_PostSuccess};