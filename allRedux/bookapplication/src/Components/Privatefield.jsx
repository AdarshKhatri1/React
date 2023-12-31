import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export default function Privatefield({children}){
const location = useLocation();
// console.log(location)
    const isAuth = useSelector(state=>state.AuthReducer.isAuth)
    // console.log(isAuth)

    if(!isAuth){
        return <Navigate to ="/login" replace state={{data:location.pathname}}/>
    }

    return   children
}