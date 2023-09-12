import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();


export default function AppcontextProvider({children}){

    const [data,setData] = useState({
        name:"",
        price:"",
        company:""
    })

    function handleChange(name,price){
            console.log("handleChange")
            
            setData({...data,name,price})
        
    }

    

    return(
       <Appcontext.Provider value={{setData,handleChange,data}}>
        {children}
       </Appcontext.Provider>
    )
}