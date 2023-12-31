import { useCallback, useEffect, useState } from "react"


export default function One(){

    const [text,setText] = useState("");

    useEffect(()=>{
        const time = setTimeout(()=>{
        
            setText("I am in the One")
        
        },2000)
    },[])

    return(
        <div>
            <h1>  
            Hello One
            </h1>

            {text&&<p>{text}</p>}



        </div>
        
    )
}