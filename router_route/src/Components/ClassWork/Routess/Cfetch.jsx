import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Cfetch(){
    const [data,setData] = useState([]);

    useEffect(()=>{

        fetch("https://reqres.in/api/users")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
        .catch((err)=>(
            console.log(err)
        ))
    },[])

    return(
<div style={{border :"2px solid green"}}>
    <h1> https://reqres.in/api/users   data's below ↓</h1>
    {
        data.map((item)=>(
                <div style={{border:"1px solid black"}}>
                    <div>Name:{item.first_name}{item.last_name}</div>
                    <img src={item.avatar} alt={item.first_name} />
                    {/* <div> Email :-- {item.email}</div> */}

                    <Link to={`/user/${item.id}`}> Show More Details</Link>
                </div>
        ))
    }
</div>
    )
    
}