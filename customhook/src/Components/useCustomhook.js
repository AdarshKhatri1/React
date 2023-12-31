import { useEffect, useState } from "react";


export default function useCustomhook(){


    const [text,setText] = useState("");

    useEffect(()=>{
        const time = setTimeout(()=>{
        
            setText("I am in the Three")
        
        },2000)
    },[])

    return text;

    
}