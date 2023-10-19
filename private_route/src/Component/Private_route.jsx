import { useContext } from "react"
import { useState } from "react"
import { Context } from "./Context"
import {Navigate} from "react-router-dom"


export default function Private_route({children}){

    const {data} = useContext(Context);
    console.log(data)

    if(!data.isAuth){

       return <Navigate to={"/login"}/>
    }

    return(
       children
    )
}