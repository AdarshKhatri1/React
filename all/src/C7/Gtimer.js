import React, { useEffect } from "react";


export default function Gtimer(){
    const[count,setCount]= React.useState(0);

    useEffect(()=>{
        
        const id =  setInterval(() => {
             console.log(count)
             setCount((prev)=>prev+1)
         }, 1000);
 
 
         return ()=>(
            clearInterval(id)
         )
     },[])
    return (
        <div>
            <h2>Count is {count}</h2>

        </div>
    )
}