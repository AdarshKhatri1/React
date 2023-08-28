import React from "react";


export default function Inputbox(){

const[text,setText] = React.useState("");

const [todos,setTodos] = React.useState([]);

function handleChange(e){
console.log(e.target)
setText(e.target.value)
}

function handleAdd(){
    setTodos([...todos,text])
    handleClear()


}

function handleClear(){
    setText("")
   
}


return(
    <div>
<h3> TODOS</h3>

<input value={text} onChange={handleChange} placeholder="Write TODOS"/>
<button onClick={handleAdd} >Add</button>
<button onClick={handleClear} >Clear</button>
<h1>Text:-  {text}</h1>

<ul>

{
    todos.map((todo)=>(

        <li>{todo}</li>
    ))
}
</ul>


    </div>
)

}