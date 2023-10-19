import { useState } from "react";
import { createContext } from "react";


export const Context = createContext();


export default function ContextProvider({children}){
    const [data,setData] = useState({
        isAuth:false,
        token:"token"
    });


    function handleChange(){
        console.log("handleChange")
        
    }

    function handleSubmit(e){
        e.preventDefault();
        // const d = {...data,isAuth:!isAuth}
        // console.log(data.isAuth)
        setData({...data,isAuth:!data.isAuth});
    }


    return(
        <Context.Provider value={{data,setData,handleChange,handleSubmit}}>
            {children}
        </Context.Provider>
    )
}