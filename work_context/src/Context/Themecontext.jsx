import { createContext, useState } from "react";


export const Themecontext = createContext();

export default function ThemeContextProvider({children}){


    const[theme,setTheme] = useState("dark");

    function handleTheme(){
        // console.log("inside handleTheme")
        setTheme( theme==="dark"?"light":"dark")
    }
    return(
        <Themecontext.Provider value={[theme,handleTheme]}  >
            {children}
        </Themecontext.Provider>
    )

}