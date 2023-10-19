
import {Link} from 'react-router-dom'

export default function Navbar(){

    return(
        <div style={{display:"flex", justifyContent:"space-around"}}>

            <Link to={"/"}> Home</Link>
            <Link to={"/dash"}> Dashboard</Link>
            <Link to={"/login"}> Login </Link>
            <Link to={"/setting"}> Settings</Link>

        </div>
    )
}