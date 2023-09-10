import { useContext } from "react";
import { Auth_Context2 } from "./Auth_Context2";
import { Navigate } from "react-router-dom";



{/* all route file me jakar is dono ko private router ke andar kar do
1.  <Route path="/User2" element={<User2/>}>user with context value </Route>
2.  <Route path="/User2_single_page/:id" element={<User2_single_page/>}>user with context value </Route> 

aise see below




*/}


export default function PrivateRoute({children}){
    const value = useContext(Auth_Context2);
    console.log(value.auth.isAuth,"value, ")
    if(!value.auth.isAuth){
        return <Navigate  to={"/Login2"}/>
    }


    return (
        children
    )
}