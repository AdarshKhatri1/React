import React, { useEffect } from "react"

export default function Timer2(){

    const [count,setCount] = React.useState(0);

    useEffect(()=>{
        setTimeout(() => {
            setCount(count+1)
        }, 1000);
    },[count])

    return (
        <div>

            <h1>Count : {count}</h1>
            
        </div>
    )
}