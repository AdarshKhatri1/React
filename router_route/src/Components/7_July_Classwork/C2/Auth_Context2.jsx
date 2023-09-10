import { createContext, useState } from "react";


export const Auth_Context2 = createContext();


export default function Auth_Context_Provider2({children}){

    const [auth,setAuth] = useState({
        isAuth:false,
        token:null
    });

    const handleLogin= (token)=>{

        setAuth({...auth,isAuth:true,token:token})
        
    }
    const handleLog_out= ()=>{
        console.log("log out")
            
        setAuth({...auth,isAuth:false,token:null})

    }

    return(
       <Auth_Context2.Provider value={{auth,handleLog_out,handleLogin}} >
        {children}
       </Auth_Context2.Provider>
    )
}