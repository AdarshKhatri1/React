import axios from "axios"
import {  Action } from "./Action"


const Get_Auth=(payload)=>(dispatch)=>{

    dispatch({type:Action.GET_AUTH_REQUEST})
    return axios.post("https://reqres.in/api/login",payload)
            .then((r)=>{
                console.log(r)
             return   dispatch({type:Action.GET_AUTH_SUCCESS,payload:r.data.token})
            })
            .catch((e)=>{
                dispatch({type:Action.GET_AUTH_FAILURE})
            })
}
export {Get_Auth}