import { Link, NavLink } from "react-router-dom";


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

        to:"/user",
        title:"Users"
    },
    {
        to:"/fetch",
        title:"FETCH ONLINE"
    }
    


]

const BaseColor ={
    color:"black",
    textDecoration:"none"
}
const Active_style={
    color:"red",
    textDecoration:"none"
}

export default function Navbar(){

    return (

        <div >

            <div style={{ border:"1px solid red", display:"flex",gap:"2rem",justifyContent:"space-between",width:"80%",margin:"20px",alignItems:"center"}}>
                <h1>1st way</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            </div>


            <div style={{width:"80%",margin:"20px", border:"1px solid red",alignItems:"center", display:"flex",gap:"2rem",justifyContent:"space-between"}}>
                <h4>
                    2nd way By Using Objects 
                </h4>
            {
                links.map((item)=>(                        
                    <Link to={item.to} >{item.title}</Link>
                ))
            }
            </div>     


            <div style={{border:"1px solid red"}}>
                <h3>Changing colors of (link tags or anchor tags) by using navlink</h3>
                <p>Prefer this link for more information   : --  https://reactrouter.com/en/main/components/nav-link</p>
                <p>Because React router .com changes its code time to time may be there is some other logic to work on navlink in future</p>
                <div style={{display:"flex", justifyContent:"center",gap:"2rem",border:"1px solid grey"}}>
                    {
                    links.map((item)=>(                        
                        <NavLink style={(isActive)=>{
                            // console.log(isActive,"is active")
                           return isActive.isActive?Active_style:BaseColor
                        }} to={item.to} >{item.title}</NavLink>
                    ))
                    }                    
                </div>
            </div>

        </div>
    )
}