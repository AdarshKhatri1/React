import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { Auth_Context2 } from "./Auth_Context2";


export default function User2(){
    const [data,setData] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();
    // const [page,setPage] = useState(1);
    const [page,setPage] = useState(searchParams.get("page")||1);
    const [text,setText] = useState(searchParams.get("q")||"");

    


    useEffect(()=>{

        setSearchParams({
            page,
            q:text
            
            // ab refresh karo page ko to same page load hoga 
        })

        fetch(`https://reqres.in/api/users?_page=${page}`)
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
    <button disabled={page===1} onClick={()=>(setPage(1))}>1</button>
    <button disabled={page===2} onClick={()=>(setPage(2))}>2</button>
    <br />
    <input  value={text} onChange={(e)=>(
        // console.log(e.target.value)
        setText(e.target.value)
    )} placeholder="Write Something"/>
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

