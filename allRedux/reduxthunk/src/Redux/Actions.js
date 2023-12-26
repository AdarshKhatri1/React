import { Actions } from "./Actionobj"

export const Get_Todo_Request_obj = ()=>{

    return {
        type: Actions.Get_Todo_Request
    }
}
export const Get_Todo_Success_obj = (payload)=>{

    return {
        type: Actions.Get_Todo_Success,
        payload
    }
}
export const Get_Todo_Failure_obj = ()=>{

    return {
        type: Actions.Get_Todo_Failure
    
    }
}
export const Post_Todo_Request_obj = ()=>{

    return {
        type: Actions.Post_Todo_Request
    }
}
export const Post_Todo_Success_obj = (payload)=>{

    return {
        type: Actions.Post_Todo_Success,
        payload
    }
}
export const Post_Todo_Failure_obj = ()=>{

    return {
        type: Actions.Post_Todo_Failure
    
    }
}