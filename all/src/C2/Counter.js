import React from "react"


export default function Counter(){

    const [count,setCount] = React.useState(0)

    function handleClick(val){
        setCount(count+val)
    }

    function Btn( {handleClick,title,val}){
        return <button onClick={()=>(
            handleClick(val)
        )} > {title}</button>
    }

    return (

        <div>

<h1> Count = {count}</h1>

<Btn handleClick={handleClick} title={"incremet"}  val={1} />
<Btn handleClick={handleClick} title={"Decrement"} val={-1} />


        </div>
    )
}