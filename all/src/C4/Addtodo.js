import React from "react"


export default function Addtodo({handleAdd}){

    const  [text,setText] = React.useState("");


    function handleText (e){
        setText(e.target.value)
    }

    return (<div>

<input value={text} onChange={handleText}  placeholder="write todos"/>

<button onClick={()=>(handleAdd(text))} >Add</button>
    </div>
    )

}