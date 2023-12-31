import axios from "axios"
import { Auth_Action } from "./Actionstype"



// const GET_AUTH_REQUEST_OBJ = ()=>{
//     return {type :Auth_Action.GET_AUTH_REQUEST}
// }
// const GET_AUTH_SUCCESS_OBJ = (payload)=>{
//     return {type :Auth_Action.GET_AUTH_SUCCESS,payload}
// }
// const GET_AUTH_FAILURE_OBJ = ()=>{
//     return {type :Auth_Action.GET_AUTH_FAILURE}
// }


export const loginn = (payload) => (dispatch)=>{
    // console.log(" login eneted")



    dispatch({type :Auth_Action.GET_AUTH_REQUEST})
    return axios.post("https://reqres.in/api/login",payload)
    .then((r)=>{
        // console.log(r)
       return dispatch( {type :Auth_Action.GET_AUTH_SUCCESS,payload:r.data.token})        
    })
    .catch((e)=>{
        dispatch({type :Auth_Action.GET_AUTH_FAILURE})
    })
}