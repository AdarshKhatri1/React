import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const id = [1,2,3,4,5]

export default function Cusers(){
    
    
    
    return (
        <div>
            Class work user

            <div>

                <h2>User dynamic page link</h2>
                <div>
                    <p> Normal creating things</p>
                    {
                        id.map((item)=>{
                            // console.log(item,"item")
                            return <div>
                                <Link key={item} to={`/user/${item}`}>move to user {item}</Link>
                                </div>
                                
                        })
                    }
                </div>

            </div>

           
        </div>
    )
}