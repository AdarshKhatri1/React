import { createContext, useState } from "react";


export const Auth_Context = createContext();


export default function Auth_Context_Provider({children}){

    const [auth,setAuth] = useState(false);

    const handleLogin= ()=>{

        
    }
    const handleLog_out= ()=>{


    }

    return(
        <Auth_Context.Provider value={{auth,handleLogin,handleLog_out}} >
            {children}
        </Auth_Context.Provider>
    )
}