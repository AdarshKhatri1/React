import { useEffect, useState } from "react";


export default function Two(){


    const [text,setText] = useState("");

    

    useEffect(()=>{
        const time = setTimeout(()=>{
        
            setText("I am in the Two")
        
        },4000)
    },[])



    return(
        <div>
            
            <h1>Hello Two</h1>
            
            {text&&<p>{text}</p>}

            </div>
    )
}