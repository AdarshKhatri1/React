
export default function Todoitem({id,status,title,handleToggle,handleDelete}){


    return(

        <div style={{border:"1px solid red", display:"flex"
                    ,borderRadius:"1rem" , gap:"50px"
                    ,width:"400px",height:"50px",alignContent:"center"
                    , alignItems:"center",justifyContent:"space-between",padding:"1rem"}}>
                        

            <div>
                {title}
            </div>
            <div>
                {status?"Done":"NotDone"}
            </div>

            <button onClick={()=>(
                handleToggle(id)
            )} >Toggle</button>


<button onClick={()=>(
    handleDelete(id)
)}>Delete</button>
        </div>
    )
}