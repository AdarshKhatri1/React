import { Actions } from "./Actionobj"

const FUN_LOGIN_REQUEST=()=>{

    return {
        type:Actions.USER_LOGIN_REQUEST
        
    }
}
const FUN_LOGIN_SUCCESS=(payload)=>{

    return {
        type:Actions.USER_LOGIN_SUCCESS,
        payload
    }
}
const FUN_LOGIN_FAILURE=()=>{

    return {
        type:Actions.USER_LOGIN_FAILURE        
    }
}

export{FUN_LOGIN_FAILURE,FUN_LOGIN_SUCCESS,FUN_LOGIN_REQUEST}