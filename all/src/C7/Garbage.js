import React, { useEffect } from "react";
import Gtimer from "./Gtimer";

export default function Garbage(){

    
    const[show,setShow]= React.useState(true);

   

    return(
        <div>

            {show && <Gtimer />}

            <button onClick={()=>(
                setShow(!show)
            )}>hide&show</button>
        </div>
    )
}