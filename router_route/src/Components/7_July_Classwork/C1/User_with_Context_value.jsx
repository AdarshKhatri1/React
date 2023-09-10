import { useContext } from "react"
import { Auth_Context } from "./Auth_Context"
import { Navigate } from "react-router-dom"


export default function User_W_C_V(){

    const value= useContext(Auth_Context)
    console.log(value,"value")

    if(!value.auth){
        return <Navigate  to={"/login"}/>
    }
    return(
        <div>

            User with context value
        </div>
    )
}