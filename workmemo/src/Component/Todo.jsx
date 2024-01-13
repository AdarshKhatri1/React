import  { useState,memo, useCallback, useMemo, useEffect } from "react"
import Todolist from "./Todolist";

const initState = [


    {
        id:1,
        task:"learn React",
        status:false
    },
    {
        id:2,
        task:"learn devtool",
        status:false
    },
    {
        id:3,
        task:"learn redux",
        status:false
    }
]


 function  Todo(){

    const [data,setData] = useState(initState);
    const [task,setTask] = useState("");

    // const f = (id)=>{
    //     console.log("enter ht")
    //  const nd = data.map((item)=>
    //  !(item.id==id)?item:{...item,status:!item.status}
    //  )

    // }

    const handleToggle =useCallback((id)=>{
        console.log("enter")
        setData((prev)=>{
             return prev.map((item)=>{

                return !(item.id==id)?item:{...item,status:!item.status}
                }

            )
        })
        // setData(nd)
    
    }
    ,[])

    // useEffect((id=1)=>{
    //         // console.log("Enter")
    //         setData((prev)=>{
    //                      return prev.map((item)=>
    //                    !(item.id==id)?item:{...item,status:!item.status}
            
    //                     )
    //                 })
    // },[])
    
    

    const handleAdd=()=>{
        setData([...data,{id:4,task:task,status:false}])
    }

    return(
        <div>
            <h1>Todo</h1>
            <div>
                <div><input type="text" onChange={(e)=>{
                    setTask(e.target.value)
                }} placeholder="add something"/>
                <button onClick={()=>{
                    handleAdd()
                }} >add</button>

                {/* <button onClick={handleAdd}>add</button> */}


                </div>
            </div>
            {data.map((item)=>{

            return<Todolist key={item.id} id={item.id} task={item.task} status={item.status} 
            
            handleToggle={handleToggle} />
            })}

        </div>
    )

}


// const checkEquality=(previousProps,currentProps)=>{
//     console.log("enter")
//     console.log(previousProps)
//     console.log(currentProps)
// }
// export default memo(Todo,checkEquality)
export default Todo;