import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export default function Cuser_Page(){

    const param = useParams();
    const [data,setData] = useState({})
    console.log(param)

    useEffect(()=>{
console.log(param,"param")

fetch(`https://reqres.in/api/users/${param.id}`)
.then((res)=>(res.json()))
.then((res)=>(
    // console.log("res", res)
    setData(res.data)
))

    },[])

    return(
        <div>

            <p>users single page</p>

            <p> user id = {param.id}</p>
            <div>
                <h1> Cfetch ka work yaha par se suru  hai isi div me hai </h1>

                <p> user id = {data.id}</p>
                <p> firstname = {data.first_name}</p>
                <p> lastname = {data.last_name}</p>
                <p> email = {data.email}</p>
                <img src={data.avatar} alt={data.first_name}/>  
            </div>

            <Link to={"/user"}>Go back</Link>



        </div>
    )
}