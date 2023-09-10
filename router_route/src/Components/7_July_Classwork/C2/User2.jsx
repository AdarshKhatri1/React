import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Auth_Context2 } from "./Auth_Context2";


export default function User2(){
    const [data,setData] = useState([]);

    


    useEffect(()=>{

        fetch("https://reqres.in/api/users")
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            setData(res.data)
        })
        .catch((err)=>(
            console.log(err)
        ))
    },[])


    //
    

    return(
<div style={{border :"2px solid green"}}>
    <h1> User 2 page hai</h1>
    <h1> </h1>
    {
        data.map((item)=>(
                <div key={item.first_name} style={{border:"1px solid black"}}>
                    <div>Name:{item.first_name}{item.last_name}</div>
                    <img src={item.avatar} alt={item.first_name} />
                    {/* <div> Email :-- {item.email}</div> */}

                    <Link to={`/User2_single_page/${item.id}`}> Show More Details</Link>
                </div>
        ))
    }
</div>
    )
    
}

