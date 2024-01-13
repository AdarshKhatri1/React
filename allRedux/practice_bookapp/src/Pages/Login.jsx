import { paste } from "@testing-library/user-event/dist/paste";
import { useState } from "react"
import { Get_Auth } from "../Redux/AuthRedux/Actiontype";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login(){
    const [email,setEmail] = useState("eve.holt@reqres.in");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const location = useLocation();
    // console.log(location)

    const handleSubmit=(e)=>{

        // console.log(e.target,"enter")

        const payload= {
            email,password
        }
        dispatch(Get_Auth(payload)).then((r)=>{
            // console.log(r,"response")
            navigate(location.state,{replace:true})
        })
        

    }

    return (
        <div>

            <div>
                <input readOnly={true} type="email" value={email} placeholder="Email" />
            </div>
            <div>
                <input type="password" onChange={(e)=>{
                    setPassword(e.target.value)
                }} value={password} placeholder="Password" />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            
        </div>
    )
}