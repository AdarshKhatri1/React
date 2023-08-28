import React, { useEffect } from "react"


export default function Timer(){

    const[count,setCount]= React.useState(0);

  useEffect(()=>{
    console.log(count)

    setInterval(() => {
        setCount((p)=>p+1)
    }, 1000);
},[])

    return(
        <div>
            <h1>
                Counter:- {count}
            </h1>
        </div>
    )
}