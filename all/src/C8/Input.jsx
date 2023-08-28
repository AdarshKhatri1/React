import { useEffect, useRef } from "react"


export default function Input(){

    const refer = useRef(null);


    useEffect(()=>{
        refer.current.focus();
},[])


    return (

        <div>

            <input ref={refer} type="text" placeholder="Write Something" name="" id="" />
        </div>
    )
}