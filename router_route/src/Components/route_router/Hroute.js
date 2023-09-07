import { Link } from "react-router-dom";



export default function Hroute(){

    return (

        <div>
            Hello Hroute

            <h1>1st way to go to the Page</h1>
            <div>

            <a href="/" >Home </a>
            <a href="/about" >About </a>

            </div>

            <h1>2nd way to go to the Page</h1>

            <div>

                <Link to="/" >Home page pe jao</Link>
                <br></br>
                <Link to="/about" >About page pe jao</Link>

            </div>

        </div>
    )
}