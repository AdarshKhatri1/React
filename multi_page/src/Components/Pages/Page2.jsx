import { useState } from "react";
import { Link } from "react-router-dom";

export default function Page2(){
    const [companyname,setCompanyName] = useState()

    return(
        <div>
            page 2
            <div>
                <div>
                    <form>
                        <input type="text" placeholder="write company name" />
                    </form>
                </div>
            <Link to={"/page1"}> go back</Link>
            </div>
        </div>
    )
}