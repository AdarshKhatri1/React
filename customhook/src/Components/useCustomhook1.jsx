import { useEffect, useState } from "react";


export default function useCustomhook1(val,delay){


    const [text,setText] = useState("");

    useEffect(()=>{
        const time = setTimeout(()=>{
        
            setText("I am in  "+val )
        
        },delay)

        return ()=>{
            clearTimeout(time)
        }
    },[])

    return [text];

    
}