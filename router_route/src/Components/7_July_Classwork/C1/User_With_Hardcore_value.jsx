import { Navigate } from "react-router-dom";


export default function User_W_H_V(){
    //Hard core value value rahega 

    const isAuth = false;

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }
    return(
        <div>

            user page me ho with hardcore value

            
        </div>
    )
}