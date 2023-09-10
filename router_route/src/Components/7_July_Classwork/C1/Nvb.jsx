import { Link, Navigate } from "react-router-dom"


const links = [

    {

        to:"/",
        title:"Home"
    },
    {

        to:"/about",
        title:"About"
    },
    {

        to:"/contact",
        title:"Contacts"
    },
    {

        to:"/User_W_H_V",
        title:"User_W_H_V"
    },
    {

        to:"/User_W_C_V",
        title:"User_W_C_V"
    },
    {
        to:"/fetch",
        title:"FETCH ONLINE"
    },
    {
        to:"/login",
        title:"Login Page"
    }
    


]
export default function Nvb(){

    
    
    return(
        <div >
                {
                    links.map((item)=>(
                        <div>
                            <Link to={item.to}>{item.title}</Link>
                            </div>
                    ))
                }

        </div>
    )
    
}