import { useSelector } from "react-redux"

export default function Todolist(){
const todos = useSelector((state)=>state.todos)
console.log(todos)
    return <div>
        {todos.map((item)=>{
            console.log(item,"dljf")
            return <div style={{display:"flex",gap:"20px",marginLeft:"100px"}} key={item.id}>
                    <div>{item.title}</div>
                    <div>{item.status?"Completed":"Not Completed"}</div>
                </div>
        })}
    </div>
}