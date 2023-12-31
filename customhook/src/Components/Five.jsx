import { useEffect } from "react";
import useFetch from "./useFetch";

export default function Five(){
// console.log("five enter")
    const {data,loading,error} = useFetch("calling");
    console.log(data)

    

    return(
        <div>
            <h1>
            I am in Five
            </h1>
            {data && data.map((item)=>{
                return <div style={{border:"1px solid red", width:"80%", margin:"auto"}} key={item.id}>{item.description} </div>
            })}


        </div>
    )
}