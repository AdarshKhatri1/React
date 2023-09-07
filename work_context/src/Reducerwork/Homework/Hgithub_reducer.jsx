import { useContext, useState } from "react"
import { Github_context } from "./Hgithub_reducerContext"
import { FetchUserbyid } from "./Hgithub_action";


export default function Hgithub_reducer(){

const [state,dispatch] = useContext(Github_context)
const [id,setId] = useState();
// console.log(dispatch)

// dispatch()

// const fun = async()=>{
//     let d = await fetch("https://api.github.com/search/users")
//     let res = await d.json();
//     console.log(res)
// }
// fun()

const mapData = (data)=>{
    console.log("mapdata")
    let d = data.map((item)=>{

    // console.log(item)
        return <div>{item.title}</div>
    })
    console.log(d)
    return d;
}

    return(
        <div>
            <input onChange={(e)=>(
                setId(e.target.value)
            )}  type="text" placeholder="Write name"/>
            <button onClick={()=>(FetchUserbyid(dispatch,id))}> text</button>

                {/* {
                    state.isError?"true":"false"
                    // state.isLoading?"true":"false"
                }
                {
                    state.isLoading?"true":"false"

                } */}
            {state.isLoading?<h1>Loading</h1>:state.isError?<h1>Error</h1>:<div>{mapData(state.data)} </div>}

            
        </div>
    )
}