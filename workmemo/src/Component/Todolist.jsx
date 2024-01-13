import { memo } from "react"

 function Todolist({id,status,task
    
    ,handleToggle

}){

// console.log(item)
    return(
        <div>
            {/* <h1>Todolist</h1> */}
            <div style={
                {
                    display:"flex",
                    // textAlign:"center"
                    gap:"1rem",
                    justifyContent:"center"
                }
            }>

<div>Task:-{task}</div>
<div>Status:-{status?"True":"False"}</div>
{/* <button onClick={()=>{
    handleToggle(id)
}} >Toogle</button> */}

<button 

onClick={()=>{handleToggle(id)}}
>Toggle</button>
            </div>
                       
        </div>
    )
}
// export default Todolist
// const checkEquality=(previousProps,currentProps)=>{
//     // console.log(previousProps)
//     // console.log("pp",previousProps.status)
//     // console.log("cp",currentProps.task)
//     return(
//         previousProps.status===currentProps.status &&
//         previousProps.task===currentProps.task
//     )
// }
// export default memo(Todolist,checkEquality)
export default memo(Todolist)
// export default Todolist