import React from "react"
import Todolist from "./Todolist";
import Addtodo from "./Addtodo";

export default function Todo(){

    const [todo,setTodo] = React.useState([]);

    function handleAdd(text){

        setTodo([...todo,
        
                    {
                        id:Date.now() + todo.length,
                        title:text,
                        status:false
                    }
        
        ])

    }
    function handleToggle(id){
        console.log(id)
        
        const updatedata = todo.map((item)=>(

            item.id===id?{...item,status:!item.status}:item

        ))
        setTodo(updatedata)
    }
    
    function handleDelete(id){
        const updateData = todo.filter((item)=>(
            item.id!==id
        ))

        setTodo(updateData)
    }
    

    return(
        <div>

<Addtodo handleAdd={handleAdd} />

<h1> Not Completed</h1>

            <Todolist data = {todo.filter((item)=>(
                !item.status
            ))} handleToggle={handleToggle} handleDelete={handleDelete} />
           

           <h1> Completed</h1>
           <Todolist data = {todo.filter((item)=>(
                item.status
            ))} handleToggle={handleToggle} handleDelete={handleDelete} />



        </div>
    )

}