import { Link, Navigate } from "react-router-dom"


const links2 = [

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

        to:"/user2",
        title:"User"
    },
   
    {
        to:"/Login2",
        title:"Login 2 Page"
    }
    


]
export default function Nvb2(){

    
    
    return(
        <div >
                {
                    links2.map((item)=>(
                        <div key={item.title}>
                            <Link  to={item.to}>{item.title}</Link>
                            </div>
                    ))
                }

        </div>
    )
    
}