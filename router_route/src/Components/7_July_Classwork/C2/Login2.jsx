import { useContext, useState } from "react"
import { Form, useNavigate } from "react-router-dom"
import { Auth_Context2 } from "./Auth_Context2"

export default function Login2(){
    const navigate = useNavigate()

    const {handleLogin,handleLog_out} = useContext(Auth_Context2)
    // console.log(handleLogin,"hand")

    const [data,setData] = useState({
        email:"",
        password:""
    })

    function handleChange(e){
        // console.log(e.target)
const {name,value} = e.target


        setData({...data,[name]:value})

    }

    function handleSubmit(e){
        e.preventDefault();

        console.log("entered")

        fetch("https://reqres.in/api/register",{

        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }

        })
        .then((res)=>(
            res.json()
        ))
        .then((res)=>{
            // console.log(res,"W")

            handleLogin(res.token)


            navigate("/user2")
        })
        .catch((err)=>(
            console.log(err,"ereel")
        ))

    }

    return(
        <div>
            Login page 2 pe ho
            <p>{data.email}</p>
            <p>{data.password}</p>
           
           <form onSubmit={handleSubmit}>
            <div>
                <input name="email" value={data.email} onChange={handleChange} type="email" placeholder="write emails"/>
            </div>
            <div>
                <input name="password" value={data.password} onChange={handleChange} type="text" placeholder="write password"/>
            </div>
            <div>
                <input type="submit"/>
            </div>


           </form>
        

        <button onClick={handleLog_out}> Log out</button>

        </div>
    )
}