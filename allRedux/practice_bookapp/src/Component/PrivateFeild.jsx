import { useSelector } from "react-redux"
import { Navigate, Route, useLocation } from "react-router-dom"


export default function PrivateFeild({children}){

    const location = useLocation()
    // console.log(location)

    const isAuth = useSelector(state=>state.AuthReducer.isAuth)
    // console.log(isAuth);

    if(!isAuth){
           return <Navigate to = "/login" state={location.pathname} replace />
    }

    return children
}