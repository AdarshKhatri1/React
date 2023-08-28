import { useEffect, useState } from "react"


export  default function Todo(){

    const [data,setData] = useState([]);
    const[loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);

    function handlePage(val){
        setPage(page+val)
    }

    
   async function fd(){
    
    setLoading(true)
    const d = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}`);
    const d1 = await d.json();
    console.log(d1);

    setData(d1)

    setLoading(false)

    }

    useEffect(()=>{
        fd();
},[page])

    // return(
    //     <div >
            
    //         <button disabled= {page ==1} onClick={()=>(
    //             handlePage(-1)
    //         )} > Previous page</button>
    //         <button onClickCapture={()=>(
    //             handlePage(1)
    //         )}>next page</button>
    //         <p> page :- {page} </p>
    //         {loading?"Loading...":


            
    //             data.map((item)=>(
    //                 <div style={{display:"flex", padding:"1rem", border :"1px solid red", gap:"1rem"}} >

    //                 <div>{item.id} </div>
    //                 <div>{item.title} </div>
    //                 <div>{item.completed?"true":"false"} </div>

    //                 </div>

    //             ))
    //         }

            
            

    //     </div>
    // )




    return(
        <div >
            
            <button disabled= {page ==1} onClick={()=>(
                handlePage(-1)
            )} > Previous page</button>
            <button onClickCapture={()=>(
                handlePage(1)
            )}>next page</button>

            {loading&& <h1> Loading...</h1>}
            <p> page :- {page} </p>
            {
                data.map((item)=>(
                    <div style={{display:"flex", padding:"1rem", border :"1px solid red", gap:"1rem"}} >

                    <div>{item.id} </div>
                    <div>{item.title} </div>
                    <div>{item.completed?"true":"false"} </div>

                    </div>

                ))
            }

            
            

        </div>
    )
}