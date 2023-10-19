import { useState } from "react";

const obj  = {name:"hello",token:false}
export default function Practice(){

    // const [data,setData] = useState({
    //     isAuth:false,
    //     token:"token"
    // });

    const [data,setData] = useState(obj)

    // function handleChange(){
    //     console.log("handleChange")
    //     // setData({...data,{token:!token}})
    // }

    

    return(
        <div>
                <h1>Practice</h1>
                <div>

                {data.token?"True Token":"False Token"}
                </div>
                {/* {data?"done":"False"} */}
            <button onClick={()=>{
                setData((prev)=>{
                    console.log(prev)
                   return {...prev,token:!data.token}
            })
            }} >onClick</button>
            <h1>adassh</h1>
        </div>
    )
}