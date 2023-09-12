import Allroutes from "../Routes/Allroutes";
import {Link} from "react-router-dom"

export default function Home(){

    return(
        <div>
            Home
            <div>

            <Link to={"/page1"}>page 1</Link>
            <br></br>
            <Link to={"/page2"}>page 2</Link>
            
            </div>
            your content below
            <Allroutes />
            
        </div>
    )
}