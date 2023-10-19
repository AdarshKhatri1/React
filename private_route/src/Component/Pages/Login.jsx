
import { useContext } from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"
import { useState } from "react";

export default function Login(){
    

    const {data,setData,handleSubmit}= useContext(Context)
    
    return (
        <div>
            Welcome to Login
            <button onClick={handleSubmit}> slkdfj</button>
            <div>
{/* {console.log(data)} */}
{/* {data.isAuth?"Done":"false"} */}
            </div>

            <div >

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Write Email" />
                    <input type="text" placeholder="Write Password" />
                    <input type="submit"/>
                </form>
            <Link to={"/"}>go Back</Link>
            </div>
        </div>
    )
}