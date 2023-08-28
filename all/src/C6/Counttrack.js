import React, { useEffect } from "react";

// document.title= "ghe"

export default function Counttrack(){

    const [count,setCount] = React.useState(0)

    useEffect(()=>{
        document.title="count is " + count;
    })

    function handleClick(){
        setCount(count+1)
    }

    return(
        <div>

<h1>Count: - {count}</h1>
<button onClick={handleClick} >next</button>

        </div>
    )

}